import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { Auth } from "./firebase/auth";
import { getErrorMessage } from "./firebase/message";

export const RegisterFirebase = async ({ name, email, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    );

    await updateProfile(response.user, {
      displayName: name,
    });

    return { ok: true };
  } catch (err) {
    return { ok: false, message: getErrorMessage(err) };
  }
};

export const LoginFirebase = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(Auth, email, password);

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      message: getErrorMessage(err),
    };
  }
};

export const SignOutFirebase = async () => {
  try {
    await signOut(Auth);

    return { ok: true };
  } catch (err) {
    return { ok: false, message: getErrorMessage(err) };
  }
};

export default Auth;
