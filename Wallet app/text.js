var n = ""
var n = JSON.parse(sessionStorage.getItem('name'));
var x = document.getElementById("uname");
x.innerText = n;
var lo = document.getElementById("lgout");

function logout() {
    x.innerText = ""
    lo.innerText = "LOGIN"
    lo.classList.remove("btn-danger")
    lo.classList.add("btn-success")

}
/*-----------------------------------fire base-----------------------------*/
const firebaseConfig = {
    apiKey: "AIzaSyCxtbhWr50g2FLdF-S-ETyCSiu611gshqU",
    authDomain: "login-4122f.firebaseapp.com",
    databaseURL: "https://login-4122f-default-rtdb.firebaseio.com",
    projectId: "login-4122f",
    storageBucket: "login-4122f.appspot.com",
    messagingSenderId: "608984940300",
    appId: "1:608984940300:web:c60e74831fa708c3845329",
    measurementId: "G-WNGL3XB43D"
};
firebase.initializeApp(firebaseConfig);

