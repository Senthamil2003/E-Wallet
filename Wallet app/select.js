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
document.getElementById("wform").addEventListener("submit", submitform);
function submitform(e) {
    e.preventDefault();
    var name = getval("name");
    var cardno = getval("no");
    var cvv = getval("cvv");
    var date = getval("date");

    savemessage(name, cardno, cvv, date);
    addData(name, cardno);
}

const savemessage = (name, cardno, cvv, date) => {
    let f = 0
    firebase.database().ref('wallet/' + cardno).set({
        name: name,
        cardno: cardno,
        cvv: cvv,
        password: date,
        amount: f,
    });

}

const getval = (id) => {
    return document.getElementById(id).value;

}
function abd(a) {
    console.log(a)
}



var ct = 0

function FetchAllData() {


    firebase.database().ref('wallet').once('value', function (snapshot) {

        snapshot.forEach(

            function (ChildSnapshot) {
                ct = ct + 1;
                let name2 = ChildSnapshot.val().name;
                let cardNo2 = ChildSnapshot.val().cardno;
                var k1 = document.getElementById("hi");
                var z1 = document.getElementById("div1");
                var z2 = document.getElementById("div2");
                let e1 = document.createElement("td");
                let d = document.createElement("div");


                let e = document.createElement("h1");
                let p = document.createTextNode("Card Details")
                let pr = document.createElement("button");
                let para1 = document.createElement("h3");
                let para2 = document.createElement("h4");
                let para3 = document.createElement("h3");
                let name3 = document.createTextNode("Name:" + name2);
                let cardNo3 = document.createTextNode("Card no:" + cardNo2);
                let ctr = document.createElement("center");
                let img = document.createElement('img');
                pr.innerHTML = "Select"
                pr.classList.add("btn")
                pr.classList.add("btn-success")
                pr.addEventListener("click", abd());

                para1.appendChild(name3);
                para2.appendChild(cardNo3);
                ctr.appendChild(pr)
                e.appendChild(p);
                d.appendChild(e);
                d.appendChild(img)
                d.appendChild(para1);
                d.appendChild(para2);
                d.appendChild(ctr);
                e.classList.add("h")


                e1.appendChild(d);
                if (ct <= 3) {
                    z1.appendChild(e1);
                }
                else if (ct <= 6) {
                    z2.appendChild(e1);
                }
                img.classList.add("img1")
                d.classList.add("sdiv")
            }

        );


    })


}
function FetchAllData1() {


}
FetchAllData1();
FetchAllData();


var k = document.getElementById("hi");
var z0 = document.getElementById("div1");
var z3 = document.getElementById("div2")

function data() {
    console.log();
}
function addData(name, cardno) {
    ct += 1
    console.log(ct);

    let e1 = document.createElement("td");
    let d = document.createElement("div");

    let e = document.createElement("h1");
    let p = document.createTextNode("Card Details")
    let pr = document.createElement("button");
    let para1 = document.createElement("h3");
    let para2 = document.createElement("h4");
    let para3 = document.createElement("h5");
    let name1 = document.createTextNode("Name:" + name);
    let cardNo1 = document.createTextNode("Card no:" + cardno);
    let img = document.createElement('img');
    let ctr = document.createElement("center");
    pr.innerHTML = "click here"
    pr.classList.add("btn")
    pr.classList.add("btn-success")
    para1.appendChild(name1);
    para2.appendChild(cardNo1);
    pr.onclick = "adb(name)"
    e.appendChild(p);
    ctr.appendChild(pr)
    d.appendChild(e);
    d.appendChild(img)
    d.appendChild(para1);
    d.appendChild(para2);
    d.appendChild(ctr);
    e1.appendChild(d);

    if (ct <= 3) {
        z0.appendChild(e1);



    }
    else if (ct <= 6) {
        z3.appendChild(e1);



    }
    else {
        alert("poda venna");
    }









    img.classList.add("img1")



    e.classList.add("h")
    d.classList.add("sdiv")



}
