// Paste your Firebase web app config values below.
// You can copy them from: Firebase Console -> Project settings -> Your apps -> Web app
// These values are safe for client-side use in a static website.

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

// Firestore document watched by the homepage for live updates.
// Example fields:
// {
//   heroTitle: 'Official JMEXE AI',
//   heroText: 'Your live-updated message from Firebase.'
// }
export const homepageDocPath = {
  collection: 'siteContent',
  document: 'homepage',
};
