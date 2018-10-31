import auth from './firebase'

export const createUser = (email, password) => {
  auth.createUserWithEmailAndPassword(email, password)
}

export const signInUser = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
}

export const passwordUpdate = (password) => {
  auth.currentUser.passwordUpdate(password)
}

export const forgotPassword = (email) => {
  auth.sendPasswordResetEmail(email)
}

export const signOut = () => {
  auth.signOut()
}