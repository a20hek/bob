import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword as signInWithEmailAndPassword_,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/compat/auth';

import { doc, setDoc } from 'firebase/compat/firestore';
import { auth, db } from '../lib/firebase';

import { useEffect, useState } from 'react';

import cookie from 'js-cookie';
import Router from 'next/router';

export const useFirebaseAuth = () => {
	const [authenticated, setAuthenticated] = useState();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleUser = async (rawUser) => {
		if (rawUser) {
			const user = await formatUser(rawUser);
			const { token, ...userWithoutToken } = user;

			createUser(user.uid, userWithoutToken);
			setUser(user);

			cookie.set('bob-auth', true, {
				expires: 1,
			});

			setLoading(false);
			return user;
		} else {
			setUser(false);
			cookie.remove('bob-auth');

			setLoading(false);
			return false;
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthenticated(true);
				setUser(user);
			} else {
				setAuthenticated(false);
				setUser(false);
			}
		});
		return unsubscribe;
	}, []);

	const signUpWithEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password).then((response) => {
			handleUser(response.user);
			Router.push('/registration');
		});
	};

	const signInWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword_(auth, email, password).then((response) => {
			handleUser(response.user);
			Router.push('/home');
		});
	};

	const signInWithGoogle = () => {
		return signInWithPopup(new GoogleAuthProvider()).then((response) => {
			handleUser(response.user);

			if (auth.UserMetadata.creationTime === auth.UserMetadata.lastSignInTime) {
				Router.push('/registration');
			} else {
				Router.push('/home');
			}
		});
	};

	function logout() {
		return signOut(auth).then(() => {
			handleUser(false);
		});
	}

	const [uid, setUid] = useState(undefined);
	auth.onAuthStateChanged((user) => setUid(user?.uid));

	return {
		authenticated,
		user,
		signUpWithEmailAndPassword,
		signInWithEmailAndPassword,
		signInWithGoogle,
		logout,
		uid,
	};
};

export function createUser(uid, data) {
	const userRef = doc(db, 'users', uid);
	return setDoc(userRef, { uid, ...data }, { merge: true });
}

const formatUser = async (user) => {
	const token = await user.getIdToken();
	return {
		uid: user.uid,
		email: user.email,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL,
		token,
	};
};
