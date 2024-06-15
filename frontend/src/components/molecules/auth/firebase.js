import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBavZEWd7mU0Q_ZuC8zBXUM-OcI1B1tN6k",
  authDomain: "pawcare-cd6a8.firebaseapp.com",
  projectId: "pawcare-cd6a8",
  storageBucket: "pawcare-cd6a8.appspot.com",
  messagingSenderId: "68159895036",
  appId: "1:68159895036:web:3a338454e17059671e2e79",
  measurementId: "G-PHHG01P2D7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;

    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      let mobileNumber = prompt("Please enter your mobile number:");

      while (mobileNumber === null || mobileNumber.trim() === "") {
        mobileNumber = prompt(
          "Mobile number cannot be empty. Please enter your mobile number:"
        );
      }
      if (mobileNumber) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          mobile: mobileNumber,
        });
      }
      else {
          alert("Mobile number is required for registration.");
        }
    } 
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, mobile) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      mobile,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth)
    .then(() => {
      window.location.assign('/'); 
    })
    .catch((error) => {
      alert(`Logout error: ${error.message}`);
    });
};


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
