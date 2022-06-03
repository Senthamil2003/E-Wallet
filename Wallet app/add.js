
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
var contactdb = firebase.database().ref("wallet");
document.getElementById("aform").addEventListener("submit", submitform);
function submitform(e) {
    e.preventDefault();
    var cno = getval("cno");
    var pin = getval("pin");
    var amt = getval('amt')
    FetchAllData(cno, pin, amt);



}
function FetchAllData(cno, pin, amt) {
    firebase.database().ref('wallet').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().cardno;
                let b = ChildSnapshot.val().password;
                let c = ChildSnapshot.val().name;
                let d = ChildSnapshot.val().cvv;
                let g = ChildSnapshot.val().amount;
                let tot = Number(g) + Number(amt)
                if (a == cno && b == pin) {
                    savemessage(tot, cno, b, c, d)
                    change();


                }



            }
        );

    })
}
function change() {
    var dv = document.getElementById("ji");
    var fm = document.getElementById("aform");
    dv.removeChild(fm)
    let h = document.createElement("h1");
    let o = document.createTextNode("SUCCESS")
    h.classList.add("h")
    h.appendChild(o)
    dv.appendChild(h)
    let img = document.createElement("img");
    img.classList.add("im1")
    dv.appendChild(img)

}

const savemessage = (amt, cno, b, c, d) => {
    firebase.database().ref('wallet/' + cno).set({
        amount: amt,
        cardno: cno,
        cvv: d,
        name: c,
        password: b

    });
}

const getval = (id) => {
    return document.getElementById(id).value;


}