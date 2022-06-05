
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

var contactdb = firebase.database().ref("transaction");
FetchAllData()

function FetchAllData() {
    firebase.database().ref('transaction').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let a = ChildSnapshot.val().name1;
                let b = ChildSnapshot.val().cardno1;
                let c = ChildSnapshot.val().amount1;
                let d = ChildSnapshot.val().date1;
                let g = ChildSnapshot.val().status;
                var a1 = document.createTextNode(a)
                var b1 = document.createTextNode(b)
                var c1 = document.createTextNode(c)
                var d1 = document.createTextNode(d)
                var g1 = document.createTextNode(g)
                let t1 = document.createElement("tr");
                let t2 = document.createElement("td");
                t2.appendChild(a1);
                let t3 = document.createElement("td");
                t3.appendChild(b1);
                let t4 = document.createElement("td");
                t4.appendChild(c1);
                let t5 = document.createElement("td");
                t5.appendChild(d1);
                let t6 = document.createElement("td");
                t6.appendChild(g1);
                t1.appendChild(t2);
                t1.appendChild(t3);
                t1.appendChild(t4);
                t1.appendChild(t5);
                t1.appendChild(t6);
                let hi = document.getElementById("hi");
                hi.appendChild(t1)
                t1.classList.add("t")
                let tr1 = document.createElement("tr");
                let tr2 = document.createElement("td");
                let tr3 = document.createElement("td");
                let tr4 = document.createElement("td");
                let tr5 = document.createElement("td");
                let tr6 = document.createElement("td");
                let tr7 = document.createElement("hr");
                let tr8 = document.createElement("hr");
                let tr9 = document.createElement("hr");
                let tr10 = document.createElement("hr");
                let tr11 = document.createElement("hr");
                tr2.appendChild(tr7)
                tr3.appendChild(tr8)
                tr4.appendChild(tr9)
                tr5.appendChild(tr10)
                tr6.appendChild(tr11)
                tr1.appendChild(tr2)
                tr1.appendChild(tr3)
                tr1.appendChild(tr4)
                tr1.appendChild(tr5)
                tr1.appendChild(tr6)
                hi.appendChild(tr1)






            }
        );

    })
}
