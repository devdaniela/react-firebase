
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';

export const useCheckAuth = () => {
    const dispacth = useDispatch();
    const { status } = useSelector( state => state.auth );
  
    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
          if( !user ) return dispacth( logout() );
  
          const { uid, email, displayName, photoURL } = user;
          dispacth( login({ uid, email, displayName, photoURL }) );
          dispacth( startLoadingNotes() );
        });
    }, []);

    return status;
}
