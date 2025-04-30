// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyB9P_b9q7JX-WUp1hm2IE6tc9ZwL1JrJRw",
  authDomain: "fideprotastore.firebaseapp.com",
  projectId: "fideprotastore",
  storageBucket: "fideprotastore.appspot.com",
  messagingSenderId: "528905688496",
  appId: "1:528905688496:web:69ba0c819d531d08263275",
  measurementId: "G-XFGP4M7KVN"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Exportar a configuração para uso em outros arquivos
export { app };
