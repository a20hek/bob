// import React, { useState, useEffect, useContext, createContext } from 'react';
// import Router from 'next/router';
// import cookie from 'js-cookie';

// import firebase from './firebase';

// const authContext = createContext();

// export function createUser(uid, data) {
// 	return firebase
// 		.firestore()
// 		.collection('users')
// 		.doc(uid)
// 		.set({ uid, ...data }, { merge: true });
// }

// export function AuthProvider({ children }) {
// 	const auth = useProvideAuth();
// 	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// export const useAuth = () => {
// 	return useContext(authContext);
// };

// function useProvideAuth() {
// 	const [user, setUser] = useState(null);
// 	const [loading, setLoading] = useState(true);

// 	const handleUser = async (rawUser) => {
// 		if (rawUser) {
// 			const user = await formatUser(rawUser);
// 			const { token, ...userWithoutToken } = user;

// 			createUser(user.uid, userWithoutToken);
// 			setUser(user);

// 			cookie.set('leetlinc-auth', true, {
// 				expires: 1,
// 			});

// 			setLoading(false);
// 			return user;
// 		} else {
// 			setUser(false);
// 			cookie.remove('leetlinc-auth');

// 			setLoading(false);
// 			return false;
// 		}
// 	};

// 	const signUpWithEmail = (email, password) => {
// 		setLoading(true);
// 		return firebase
// 			.auth()
// 			.createUserWithEmailAndPassword(email, password)
// 			.then((response) => {
// 				handleUser(response.user);
// 				Router.push('/registration/1');
// 			});
// 	};

// 	const signinWithEmail = (email, password) => {
// 		setLoading(true);
// 		return firebase
// 			.auth()
// 			.signInWithEmailAndPassword(email, password)
// 			.then((response) => {
// 				handleUser(response.user);
// 				Router.push('/home');
// 			});
// 	};

// 	const signinWithGoogle = () => {
// 		setLoading(true);
// 		return firebase
// 			.auth()
// 			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
// 			.then((response) => {
// 				handleUser(response.user);

// 				if (
// 					firebase.auth().currentUser.metadata.creationTime ===
// 					firebase.auth().currentUser.metadata.lastSignInTime
// 				) {
// 					Router.push('/registration/1');
// 				} else {
// 					Router.push('/home');
// 				}
// 			});
// 	};

// 	const signout = () => {
// 		Router.push('/');
// 		return firebase
// 			.auth()
// 			.signOut()
// 			.then(() => handleUser(false));
// 	};

// 	const [uid, setUid] = useState(undefined);
// 	const authchange = getAuth(firebaseApp);
// 	onAuthStateChanged((authchange, user) => setUid(user?.uid));

// 	useEffect(() => {
// 		const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

// 		return () => unsubscribe();
// 	}, []);

// 	return {
// 		user,
// 		loading,
// 		signUpWithEmail,
// 		signinWithEmail,
// 		signinWithGoogle,
// 		signout,
// 		uid,
// 	};
// }

// const formatUser = async (user) => {
// 	const token = await user.getIdToken();
// 	return {
// 		uid: user.uid,
// 		email: user.email,
// 		provider: user.providerData[0].providerId,
// 		photoUrl: user.photoURL,
// 		token,
// 	};
// };
