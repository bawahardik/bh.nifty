

// $( function() {
//   $( "#datepicker" ).datepicker();
  
//     var datew = $('#datepicker').datepicker('getDate');

//     console.log(datew)
// } );
// var datew = $('#datepicker').datepicker('getDate');
// console.log(datew)



/////////////////////////////////////////////////////

let timeV = 15;
let strikeV = 5;

  const strikeBA = document.getElementById('atm');
  const strikeB1 = document.getElementById('1S');
  const strikeB2 = document.getElementById('2S');
  const strikeB3 = document.getElementById('3S');
  const strikeB4 = document.getElementById('4S');
  const strikeB5 = document.getElementById('5S');
  const strikeB6 = document.getElementById('6S');
  const strikeB7 = document.getElementById('7S');
  const strikeB8 = document.getElementById('8S');
  const strikeB9 = document.getElementById('9S');
  const strikeB10 = document.getElementById('10S');

  const sT = document.getElementById('str');

  const datePick = document.getElementById('datepicker');



  strikeBA.addEventListener('click', function handleClick() {
    strikeV = 0;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ 'ATM';
  });


  strikeB1.addEventListener('click', function handleClick() {
    strikeV = 1;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });

  strikeB2.addEventListener('click', function handleClick() {
    strikeV = 2;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB3.addEventListener('click', function handleClick() {
    strikeV = 3;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB4.addEventListener('click', function handleClick() {
    strikeV = 4;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB5.addEventListener('click', function handleClick() {
    strikeV = 5;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB6.addEventListener('click', function handleClick() {
    strikeV = 6;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB7.addEventListener('click', function handleClick() {
    strikeV = 7;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB8.addEventListener('click', function handleClick() {
    strikeV = 8;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });

  strikeB9.addEventListener('click', function handleClick() {
    strikeV = 9;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });

  strikeB10.addEventListener('click', function handleClick() {
    strikeV = 10;
    hello();
    hello2();
    sT.innerHTML = 'Strikes '+ strikeV;
  });






const timeB1 = document.getElementById('1');
const timeB2 = document.getElementById('2');
const timeB3 = document.getElementById('3');
const timeB4 = document.getElementById('4');
const timeB5 = document.getElementById('5');
const timeB6 = document.getElementById('6');
const timeB7 = document.getElementById('7');
const timeB8 = document.getElementById('8');
const timeB9 = document.getElementById('9');
const timeB10 = document.getElementById('10');
const timeB11 = document.getElementById('11');
const timeB12 = document.getElementById('12');
const timeB13 = document.getElementById('13');
const timeB14 = document.getElementById('14');
const timeB15 = document.getElementById('15');

const tT = document.getElementById('time');


timeB1.addEventListener('click', function handleClick() {
  timeV = 1;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});

timeB2.addEventListener('click', function handleClick() {
  timeV = 2;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB3.addEventListener('click', function handleClick() {
  timeV = 3;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB4.addEventListener('click', function handleClick() {
  timeV = 4;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB5.addEventListener('click', function handleClick() {
  timeV = 5;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB6.addEventListener('click', function handleClick() {
  timeV = 6;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB7.addEventListener('click', function handleClick() {
  timeV = 7;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB8.addEventListener('click', function handleClick() {
  timeV = 8;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB9.addEventListener('click', function handleClick() {
  timeV = 9;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB10.addEventListener('click', function handleClick() {
  timeV = 10;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB11.addEventListener('click', function handleClick() {
  timeV = 11;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB12.addEventListener('click', function handleClick() {
  timeV = 12;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB13.addEventListener('click', function handleClick() {
  timeV = 13;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB14.addEventListener('click', function handleClick() {
  timeV = 14;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});
timeB15.addEventListener('click', function handleClick() {
  timeV = 15;
  tT.innerHTML = 'Time '+ timeV;
  hello();
  hello2();
});

console.log(timeV);









import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection ,query} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrZQUthBhisRwdqBNZcLWG_EF3TDQpQhM",
  authDomain: "bawa-7205e.firebaseapp.com",
  projectId: "bawa-7205e",
  storageBucket: "bawa-7205e.appspot.com",
  messagingSenderId: "657809129878",
  appId: "1:657809129878:web:63d6f988afb86bf7c69db7"
};

const app = initializeApp(firebaseConfig);

const date = new Date();
let day1 = 0
let month1 = 0
let day = date.getDate();
if(day/10 < 1)
{
   day1 = '0'+day;
}
let month = date.getMonth() + 1;
if(month/10 < 1)
{
   month1 = '0'+month;
}
let year = date.getFullYear();

let currentDate = `${year}-${month1}-${day1}`;
console.log(currentDate)
const db = getFirestore();



////////////////////////////////////////////////////////////

// Create an array to store time strings


// Display the result
hello();
async function hello()
{

  const list = document.getElementById("ls")
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

const q = query(collection(db,currentDate));
let a = 0;
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc)=>{
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let originalString = doc.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = doc.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

// console.log(ex1);

// const ex1 = 
const exOne = JSON.parse(ex1);
const exTwo = JSON.parse(ex2);

let callT = 0
let putT = 0


for(let i = 0; i <= strikeV;i++)
{
  putT = putT + exOne[9-i].PE.changeinOpenInterest;
  callT = callT + exOne[9-i].CE.changeinOpenInterest;
}

for(let i = 1; i <= strikeV;i++)
{
  putT = putT + exOne[9+i].PE.changeinOpenInterest;
  callT = callT + exOne[9+i].CE.changeinOpenInterest;
}




if(a%timeV == 0)
{
createContainerLeft(doc.id,callT,putT,putT-callT,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue)

}
a++;
console.log(callT);





















});
}

hello2();
async function hello2()
{

  const list = document.getElementById("rs")
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

const q = query(collection(db,currentDate));
let a = 0;
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc)=>{
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let originalString = doc.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = doc.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

// console.log(ex1);

// const ex1 = 
// const exOne = JSON.parse(ex1);
const exTwo = JSON.parse(ex2);

let callT = 0
let putT = 0


for(let i = 0; i <= strikeV;i++)
{
  putT = putT + exTwo[9-i].PE.changeinOpenInterest;
  callT = callT + exTwo[9-i].CE.changeinOpenInterest;
}

for(let i = 1; i <= strikeV;i++)
{
  putT = putT + exTwo[9+i].PE.changeinOpenInterest;
  callT = callT + exTwo[9+i].CE.changeinOpenInterest;
}




if(a%timeV == 0)
{
createContainerRight(doc.id,callT,putT,putT-callT,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exTwo[9].CE.underlyingValue)

}
a++;
console.log(callT);





















});
}

const docRef = doc(db, currentDate,"9:36");
const docSnap = await getDoc(docRef);

let originalString = docSnap.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = docSnap.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

console.log(ex1);

// const ex1 = 
const exOne = JSON.parse(ex1);
const exTwo = JSON.parse(ex2);

document.getElementById("ex1").innerHTML = "Expiry- " + exOne[0].expiryDate;

document.getElementById("ex2").innerHTML = "Expiry- " + exTwo[0].expiryDate;
console.log(exOne[0].expiryDate)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













































































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createContainerLeft(time, call,put,diff,pcr,pc,underV) {
  const container = document.createElement('div');
  container.classList.add('container');

    const column1 = document.createElement('div');
    column1.classList.add('column');
    column1.id = "time1";
    column1.innerHTML = time;
    container.appendChild(column1);

    const column2 = document.createElement('div');
    column2.classList.add('column');
    column2.id = "call1";
    column2.innerHTML = call;
    container.appendChild(column2);

    const column3 = document.createElement('div');
    column3.classList.add('column');
    column3.id = "put1";
    column3.innerHTML = put;
    container.appendChild(column3);

    const column4 = document.createElement('div');
    column4.classList.add('column');
    column4.innerHTML = diff;
    column4.id = "diff1";
    container.appendChild(column4);

    const column5 = document.createElement('div');
    column5.classList.add('column');
    column5.id = "pcr1";
    column5.innerHTML = pcr;
    container.appendChild(column5);

    const column6 = document.createElement('div');
    column6.classList.add('column');
    column6.innerHTML = pc;
    column6.id = "cp%1";
    container.appendChild(column6);

    const column7 = document.createElement('div');
    column7.classList.add('column');
    column7.innerHTML = underV;
    column7.id = "underV";
    container.appendChild(column7);

    
  const v = document.getElementById("ls");
  v.appendChild(container);

    // Add a border to the right side of each column
    // if (i < numColumns - 1) {
    //   column.classList.add('with-border');
    // }
  }




  
function createContainerRight(time, call,put,diff,pcr,pc,underV) {
  const container = document.createElement('div');
  container.classList.add('container');

    const column1 = document.createElement('div');
    column1.classList.add('column');
    column1.id = "time2";
    column1.innerHTML = time;

    container.appendChild(column1);

    const column2 = document.createElement('div');
    column2.classList.add('column');
    column2.id = "call2";
    column2.innerHTML = call;
    container.appendChild(column2);


    const column3 = document.createElement('div');
    column3.classList.add('column');
    column3.id = "put2";
    column3.innerHTML = put;
    container.appendChild(column3);

    const column4 = document.createElement('div');
    column4.classList.add('column');
    column4.id = "diff2";
    column4.innerHTML = diff;
    container.appendChild(column4);

    const column5 = document.createElement('div');
    column5.classList.add('column');
    column5.id = "pcr2";
    column5.innerHTML = pcr;
    container.appendChild(column5);

    const column6 = document.createElement('div');
    column6.classList.add('column');
    column6.id = "cp%2";
    column6.innerHTML = pc;
    container.appendChild(column6);

    const column7 = document.createElement('div');
    column7.classList.add('column');
    column7.innerHTML = underV;
    column7.id = "underV";
    container.appendChild(column7);

  const v = document.getElementById("rs");
  v.appendChild(container);

    // // Add a border to the right side of each column
    // if (i < numColumns - 1) {
    //   column.classList.add('with-border');
    // }
  }






// createContainerLeft(6,6,6,6,6,6,6);

// createContainerRight(6,6,6,6,6,6,6);
