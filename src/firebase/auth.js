import { auth } from './firebase'

export const createUser = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password)
}

export const signInUser = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password)
}

export const passwordUpdate = (password) => {
  return auth().currentUser.passwordUpdate(password)
}

export const forgotPassword = (email) => {
  return auth().sendPasswordResetEmail(email)
}

export const signOut = () => {
  return auth().signOut()
}