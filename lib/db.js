import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function getUserByUsername(username) {
  return firestore.collection('users').where('username', '==', username).get();
}

export function getLinks(uid) {
  const { links } = firestore.collection('users').get(uid);
  return firestore.collection('users').doc(uid).get();
}

export function updateLinks(id, data) {
  return firestore.collection('users').doc(id).update({ links: data });
}
