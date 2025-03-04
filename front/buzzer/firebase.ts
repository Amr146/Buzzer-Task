// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDcWOW14chCpZ6374NrQhuYznjO-CODpr4',
	authDomain: 'buzzer-4a8c4.firebaseapp.com',
	projectId: 'buzzer-4a8c4',
	storageBucket: 'buzzer-4a8c4.firebasestorage.app',
	messagingSenderId: '61243576145',
	appId: '1:61243576145:web:027765ff40841b11d50d70',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
