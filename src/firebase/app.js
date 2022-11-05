import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyA1l9ado48oz2B3l7vNZLQfVyoyzjgydho',
  authDomain: 'app-profesores-361ee.firebaseapp.com',
  projectId: 'app-profesores-361ee',
  storageBucket: 'app-profesores-361ee.appspot.com',
  messagingSenderId: '34248619950',
  appId: '1:34248619950:web:670168cf0e5e5eb66a7a3f',
  measurementId: 'G-R0X8JZCWQN'
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
