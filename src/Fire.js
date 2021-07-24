import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBRHVPmOdVy9ueImEaS3cwj0i8OOSqPsCc",
    authDomain: "todolist-5a42e.firebaseapp.com",
    projectId: "todolist-5a42e",
    storageBucket: "todolist-5a42e.appspot.com",
    messagingSenderId: "332578055341",
    appId: "1:332578055341:web:d0e99fc3c98dec54ccd224"
  };
const fire =   firebase.initializeApp(firebaseConfig);

export default fire;
