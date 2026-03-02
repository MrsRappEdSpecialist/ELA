
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// Your Official ELA Firebase Configuration
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

// The "Security Gate" Logic
onAuthStateChanged(auth, (user) => {
  const loginSection = document.getElementById('login-section');
  const studentContent = document.getElementById('student-content');
  const welcomeMsg = document.getElementById('welcome-msg');

  if (user) {
    // If student is logged in: Show the work, hide the login button
    if (loginSection) loginSection.style.display = 'none';
    if (studentContent) studentContent.style.display = 'block';
    if (welcomeMsg) welcomeMsg.innerText = "Welcome to ELA, " + user.displayName + "!";
    console.log("Logged in as:", user.email);
  } else {
    // If student is logged out: Show the login button, hide the work
    if (loginSection) loginSection.style.display = 'block';
    if (studentContent) studentContent.style.display = 'none';
  }
});

// Make buttons work globally
window.login = () => signInWithPopup(auth, provider);
window.logout = () => signOut(auth);

// Helper to make the buttons clickable immediately
document.addEventListener('click', (e) => {
    if (e.target.id === 'login-btn') window.login();
    if (e.target.id === 'logout-btn') window.logout();
});
