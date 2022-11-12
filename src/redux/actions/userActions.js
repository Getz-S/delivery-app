import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

import { userTypes } from "../types/userTypes";

export const actionRegisterAsync = ({ email, password, name, avatar,phoneNumber }) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user);
        const { accessToken } = user.auth.currentUser;
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: avatar,
          phoneNumber
        });
        dispatch(
          actionRegisterSync({
            email,
            name,
            accessToken,
            photoURL: avatar,
            phoneNumber,
            error: false,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(actionRegisterSync({ error: true, errorMessage }));
      });
  };
};
const actionRegisterSync = (user) => {
  return {
    type: userTypes.USER_REGISTER,
    payload: { ...user },
  };
};

export const actionLoginAsync = ({ email, password }) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      co
    })
    .catch()
  }
}

const ationLoginSync = (user) => {
  return {
    type: userTypes.USER_LOGIN,
    payload: {...user },
  };
}
