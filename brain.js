import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// Your Updated ELA Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe8t-wMNrf8vf1S5hYH1fnphjKiK0p2io",
  authDomain: "mrsrappedspecialist.firebaseapp.com",
  projectId: "mrsrappedspecialist",
  storageBucket: "mrsrappedspecialist.firebasestorage.app",
  messagingSenderId: "994757207680",
  appId: "1:994757207680:web:60707d7f5098162c8da865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Monitoring the Student's Login Status
onAuthStateChanged(auth, (user) => {
  const loginSection = document.getElementById('login-section');
  const studentContent = document.getElementById('student-content');
  const welcomeMsg = document.getElementById('welcome-msg');

  if (user) {
    // If student is signed in: Show the ELA Assignments
    if (loginSection) loginSection.style.display = 'none';
    if (studentContent) studentContent.style.display = 'block';
    if (welcomeMsg) welcomeMsg.innerText = "Welcome to ELA, " + user.displayName + "!";
  } else {
    // If student is signed out: Keep the work hidden
    if (loginSection) loginSection.style.display = 'block';
    if (studentContent) studentContent.style.display = 'none';
  }
});

// Setup Login/Logout functions
window.login = () => signInWithPopup(auth, provider);
window.logout = () => signOut(auth);

// Helper to make buttons interactive
document.addEventListener('click', (e) => {
    if (e.target.id === 'login-btn') window.login();
    if (e.target.id === 'logout-btn') window.logout();
});
