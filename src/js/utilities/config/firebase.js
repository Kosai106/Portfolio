import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyA8hoyBd0SYBd9nwjYDxsiOtntirp-V3AU',
	authDomain: 'oesterkilde-5f667.firebaseapp.com',
	databaseURL: 'https://oesterkilde-5f667.firebaseio.com',
	projectId: 'oesterkilde-5f667',
	storageBucket: 'oesterkilde-5f667.appspot.com',
	messagingSenderId: '907454376163',
};
firebase.initializeApp(config);

export default firebase;
