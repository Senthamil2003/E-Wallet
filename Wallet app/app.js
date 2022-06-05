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
var contactdb = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();
    var name = getval("name");
    var mail = getval("mail");
    var mobile = getval("mobile");
    var password = getval("password");

    savemessage(name, mail, mobile, password);


}
const savemessage = (name, mail, mobile, password) => {
    var newcontactdb = contactdb.push();
    newcontactdb.set({
        name: name,
        mail: mail,
        mobile: mobile,
        password: password,
    });
}

const getval = (id) => {
    return document.getElementById(id).value;


}
FetchAllData();
function FetchAllData() {
    firebase.database().ref('form').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().name;
                console.log(a);
            }
        );
    })
}