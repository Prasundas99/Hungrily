export const login = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
 const data =   firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {

      dispatch({ type: 'LOGIN_SUCCESS',
    payload:data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}


export const register = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        Name: newUser.firstName,
        initials: newUser.firstName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}


export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    localStorage.removeItem("userInfo");

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

