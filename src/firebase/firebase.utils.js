import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDsdtf962J6lLs50L9kWZ1IASP3SWuX0nI',
	authDomain: 'crown-db-abd87.firebaseapp.com',
	projectId: 'crown-db-abd87',
	storageBucket: 'crown-db-abd87.appspot.com',
	messagingSenderId: '226879128086',
	appId: '1:226879128086:web:c099143c85e50f19802b37',
	measurementId: 'G-D7R1BXMQ4R',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
