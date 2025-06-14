// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIZBFF2EPJ31fhdadMhg_MiDSPrxivKEk",
  authDomain: "ratemyroutine.firebaseapp.com",
  projectId: "ratemyroutine",
  storageBucket: "ratemyroutine.appspot.com",
  messagingSenderId: "791603545525",
  appId: "1:791603545525:web:87ec6e60fcccf4919b85fc",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
