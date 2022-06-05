
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
var contactdb1 = firebase.database().ref("transaction");
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
                let tot = Number(g) - Number(amt)
                if (a == cno && b == pin) {
                    if (tot >= 0) {
                        savemessage(tot, cno, b, c, d)
                        var er = new Date();
                        var day = er.getDate();
                        var mt = er.getMonth();
                        var yr = er.getFullYear();
                        var dt = day + "-" + mt + "-" + yr
                        transaction(c, a, amt, dt)
                        change();

                    }
                    else {
                        alert("NOT SUFFICIENT BALANCE")
                    }


                }



            }
        );

    })
}
function change() {
    var dv = document.getElementById("dv2");
    var fm = document.getElementById("aform");
    dv.removeChild(fm)

    let img = document.createElement("img");
    img.classList.add("im1")
    dv.appendChild(img)
    let img1 = document.createElement("h1");

    img1.innerHTML = "PAYMENT SUCCESS"
    img1.classList.add("im2")
    dv.appendChild(img1)

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
const transaction = (a1, b1, c1, d1) => {
    var newcontactdb = contactdb1.push();
    newcontactdb.set({
        name1: a1,
        cardno1: b1,
        amount1: c1,
        date1: d1,
        status: "Debited"

    });
}


const getval = (id) => {
    return document.getElementById(id).value;


}