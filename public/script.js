// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgsetfpy-FTnZnFfKTx1MdOBrm_YrGcKY",
  authDomain: "meuportal-saude.firebaseapp.com",
  projectId: "meuportal-saude",
  storageBucket: "meuportal-saude.firebasestorage.app",
  messagingSenderId: "916869191168",
  appId: "1:916869191168:web:f24abaf4a5256835e02ae5",
  measurementId: "G-6HQ1YNXQY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);







document.getElementById("abrir-chat").addEventListener("click", function (e) {
    e.preventDefault();

    const container = document.getElementById("chat-container");

    if (container.innerHTML === "") {
      container.innerHTML = `
        <iframe 
          src="https://app.gptmaker.ai/widget/3E5EB6FFE929329888E65AFCCFD2B78F/iframe" 
          width="100%" 
          style="height: 100%; min-height: 700px" 
          allow="microphone;" 
          frameborder="0">
        </iframe>
      `;
    }

    container.scrollIntoView({ behavior: "smooth" });
  });