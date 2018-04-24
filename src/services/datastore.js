import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA2taHj74wOdJm3t354hvr7-g9IdvpTS58',
  authDomain: 'lab3-thekevhu.firebaseapp.com',
  databaseURL: 'https://lab3-thekevhu.firebaseio.com',
  projectId: 'lab3-thekevhu',
  storageBucket: 'lab3-thekevhu.appspot.com',
  messagingSenderId: '159154439287',
};
firebase.initializeApp(config);

const database = firebase.database();


const fetchNotes = (callback, notesId) => {
  database.ref(notesId).on('value', (snapshot) => {
    callback(snapshot.val());
  });
};

const createNote = (note, notesId) => {
  database.ref(notesId).push(note);
};

const deleteNote = (id, notesId) => {
  database.ref(notesId).child(id).remove();
};

const updateNote = (id, note, notesId) => {
  database.ref(notesId).child(id).update(note);
};

export { database, fetchNotes, createNote, deleteNote, updateNote };
