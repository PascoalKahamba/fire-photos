import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCmko4t119WZwmLkFlf5WwA2JeE86iN2H8',
  authDomain: 'post-news-e601f.firebaseapp.com',
  projectId: 'post-news-e601f',
  storageBucket: 'post-news-e601f.appspot.com',
  messagingSenderId: '387656177949',
  appId: '1:387656177949:web:9ff323bf0874da2ca129f4'
}

export const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
// const database = firebase.database();
