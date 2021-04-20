import firebase from 'firebase';
import toast from 'react-hot-toast';
import { auth, generateUserDocument } from '.';
import i18n from '@i18n/index';
const provider = new firebase.auth.GoogleAuthProvider();

export const resetPassword = async (email: string) => {
  const res = await auth.sendPasswordResetEmail(email);
  toast.success(`${i18n.t('toasts.resetPasswordSuccess')}`);
  return res;
};

export const authStateChange = () => {
  auth.onAuthStateChanged(async userAuth => {
    const user = await generateUserDocument(userAuth);
    return user;
  });
};

export const signInEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const res = await auth.signInWithEmailAndPassword(email, password);
  toast.success(`${i18n.t('toasts.signInSuccess')}`);
  return res;
};

export const signInWithGoogle = async () => {
  const res = await auth.signInWithPopup(provider);
  toast.success(`${i18n.t('toasts.signInSuccess')}`);
  return res;
};

export const signUpEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const res = await auth.createUserWithEmailAndPassword(email, password);
  toast.success(`${i18n.t('toasts.signUpSuccess')}`);
  return res;
};

export const signOut = async () => {
  await auth.signOut();
};
