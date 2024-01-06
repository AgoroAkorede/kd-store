// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZfHnRXmCS7EWi2Q_y3sUw9y-Amns7eCM',
  authDomain: 'kd-store-203e8.firebaseapp.com',
  projectId: 'kd-store-203e8',
  storageBucket: 'kd-store-203e8.appspot.com',
  messagingSenderId: '924636863962',
  appId: '1:924636863962:web:8a4187cf8ed4405dcdf4e3',
  measurementId: 'G-3MQTKWCEN1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
const analytics = getAnalytics(app)
