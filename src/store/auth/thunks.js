import { async } from '@firebase/util';
import { checkingCredentials, login, logout } from '.';
import { loginWithEmailPassword, logoutFirebase, registrerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { clearNotesLogout } from '../journal';

export const checkingAuthentication = ( email, password ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );
    }
}


export const startGoogleSignIn = ()  => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );

        // console.log( {result} );
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName })  => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const {ok, uid, photoURL, errorMessage } = await registrerUserWithEmailPassword({ email, password, displayName });
        if( !ok ) return dispatch( logout({ errorMessage }) );
        dispatch( login({ uid, displayName, email, photoURL }) );
        // console.log( resp );
    }


}

export const startLoginWithEmailPassword = ({ email, password })  => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        if( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout() );
    }
}