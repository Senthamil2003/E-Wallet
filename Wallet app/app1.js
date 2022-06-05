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
document.getElementById("lform").addEventListener("submit", submitfn);
function submitfn(e) {
    e.preventDefault();
    var name = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    FetchAllData(name, password);
}
var ct = 0;


function FetchAllData(name, password) {
    firebase.database().ref('form').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().name;
                let b = ChildSnapshot.val().password;
                if (a == name && b == password) {
                    ct = 1


                }



            }
        );
        Valid(ct, name)
    })
}

function Valid(ct, name) {
    if (ct == 1) {
        console.log(name);
        sessionStorage.setItem('name', JSON.stringify(name));
        window.location = 'index.html';


    }
    else {
        alert("Enter the valid mail")
    }
}


