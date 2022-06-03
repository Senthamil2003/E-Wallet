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
    FetchAllData(cno, pin);



}
function FetchAllData(cno, pin) {
    firebase.database().ref('wallet').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().cardno;
                let b = ChildSnapshot.val().password;
                if (a == cno && b == pin) {
                    let c = ChildSnapshot.val().name;
                    let d = ChildSnapshot.val().amount;
                    change(c, a, d);


                }



            }
        );

    })
}
function change(c, a, e) {
    let d = document.getElementById("dv2")
    let g = document.getElementById("aform");
    d.removeChild(g)
    let img = document.createElement("img");
    d.appendChild(img);
    img.classList.add("img2");
    let p1 = document.createElement("h1");
    p1.innerText = "NAME"
    d.appendChild(p1)
    p1.classList.add("p1");
    let p2 = document.createElement("h1");
    p2.innerHTML = c;
    d.appendChild(p2)
    p2.classList.add("p2")
    let p3 = document.createElement("h1");
    p3.innerText = "CARD NO"
    d.appendChild(p3)
    let p4 = document.createElement("h1");
    p4.innerText = a;
    d.appendChild(p4)
    let p5 = document.createElement("h1");
    d.appendChild(p5)
    p5.innerText = "Balance"
    let p6 = document.createElement("h1");
    p6.innerText = e
    d.appendChild(p6)
    p3.classList.add("p1")
    p5.classList.add("p1")
    p4.classList.add("p2")
    p6.classList.add("p2")
    let bt1 = document.createElement("button");
    bt1.innerHTML = "Ok"
    bt1.classList.add("btn")
    bt1.classList.add("btn-dark")
    bt1.classList.add("btn3")

    d.appendChild(bt1)






}



const getval = (id) => {
    return document.getElementById(id).value;


}