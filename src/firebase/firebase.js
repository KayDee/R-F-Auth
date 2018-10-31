import firebase from 'firebase/app'

var config = {
  apiKey: "AIzaSyCvxLRF0C0vdTyexI1PVvOgeDXLdigHJvI",
  authDomain: "myfirst-879f3.firebaseapp.com",
  databaseURL: "https://myfirst-879f3.firebaseio.com",
  projectId: "myfirst-879f3",
  storageBucket: "myfirst-879f3.appspot.com",
  messagingSenderId: "86908453941"
}

if(!firebase.apps.length){
  firebase.initializeApp(config)
}

const auth = firebase.auth

export{
  auth
}