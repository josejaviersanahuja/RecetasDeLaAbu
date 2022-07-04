import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Dispatch} from 'react';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '584957248354-t8f6teaoba2fhji4of24oh6b0a51vaaq.apps.googleusercontent.com',
});

export const OnAuthStateChange = (
  setAuth: Dispatch<FirebaseAuthTypes.User | null>,
) => {
  return auth().onAuthStateChanged(user => console.log(user));
};

export const logout = () => {
  return auth()
    .signOut()
    .catch(err => {
      console.error(err);
    });
};

export const handleGoogleLogIn = () => {
  console.log('entro?');

  return GoogleSignin.signIn({loginHint: 'email'})
    .then(user => {
      console.log(user);
      const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
      return auth().signInWithCredential(googleCredential);
    })
    .catch(err => {
      console.error(err, err.code, statusCodes, statusCodes.IN_PROGRESS);
    });
};

export const handleFacebookLogIn = () => {
  return LoginManager.logInWithPermissions(['public_profile', 'email'])
    .then(loginResult => {
      if (loginResult.isCancelled) {
        throw 'User cancelled the login';
      }
      return AccessToken.getCurrentAccessToken();
    })
    .then(accesToken => {
      if (!accesToken) {
        throw 'Something went wrong withe acces token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        accesToken.accessToken,
      );
      return auth().signInWithCredential(facebookCredential);
    })
    .catch(err => {
      console.error(err);
    });
};
