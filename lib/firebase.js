import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyAmvXlKQWHCueOyjZ_3sjbhATl4Zt7Dn9c',
	authDomain: 'bondingoverbindingss.firebaseapp.com',
	projectId: 'bondingoverbindingss',
	storageBucket: 'bondingoverbindingss.appspot.com',
	messagingSenderId: '16876023707',
	appId: '1:16876023707:web:f84c0291fb221d5768fb3e',
	measurementId: 'G-6FV1X24NDV',
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// const analytics = getAnalytics();

export { auth, db, firebaseApp };
