import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Dispatch} from 'react';

// TODO definir la interface de currentUser
export type UserContextType = {
  auth: FirebaseAuthTypes.User | null;
  currentUser: any;
  setCurrentUser: Dispatch<any>;
  setRefresh: Dispatch<(v: boolean) => boolean>;
};
