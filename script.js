let timeV = 3;
let timeVS = 1;
let strikeV = 5;
let mainc = 0;
let priceBefore = 0;
let boolLine = false;
let sp=0;
let aaa=0;

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


  
  const advB = document.getElementById('advBB');
  const closeBtn = document.getElementById('closeModal');
  const overlay = document.getElementById('modalOverlay');
  advB.addEventListener('click', function handleClick(){
    overlay.style.display = 'flex';
    
  });


closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

  const sT = document.getElementById('str');

  const datePick = document.getElementById('datepicker');


  strikeBA.addEventListener('click', function handleClick() {
    strikeV = 0;
    hello();
     
    sT.innerHTML = 'Strikes '+ 'ATM';
  });


  strikeB1.addEventListener('click', function handleClick() {
    strikeV = 1;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });

  strikeB2.addEventListener('click', function handleClick() {
    strikeV = 2;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB3.addEventListener('click', function handleClick() {
    strikeV = 3;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB4.addEventListener('click', function handleClick() {
    strikeV = 4;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB5.addEventListener('click', function handleClick() {
    strikeV = 5;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB6.addEventListener('click', function handleClick() {
    strikeV = 6;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB7.addEventListener('click', function handleClick() {
    strikeV = 7;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });
  strikeB8.addEventListener('click', function handleClick() {
    strikeV = 8;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });

  strikeB9.addEventListener('click', function handleClick() {
    strikeV = 9;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });

  strikeB10.addEventListener('click', function handleClick() {
    strikeV = 10;
    hello();
     
    sT.innerHTML = 'Strikes '+ strikeV;
  });




const timeS1 = document.getElementById('1s');
const timeS2 = document.getElementById('2s');
const timeS3 = document.getElementById('3s');
const timeS4 = document.getElementById('4s');
const timeS5 = document.getElementById('5s');
const timeS6 = document.getElementById('6s');
const timeS7 = document.getElementById('7s');
const timeS8 = document.getElementById('8s');
const timeS9 = document.getElementById('9s');
const timeS10 = document.getElementById('10s');
const timeS11 = document.getElementById('11s');
const timeS12 = document.getElementById('12s');
const timeS13 = document.getElementById('13s');
const timeS14 = document.getElementById('14s');
const timeS15 = document.getElementById('15s');

const tTS = document.getElementById('times');



timeS1.addEventListener('click', function handleClick() {
  timeVS = 1;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});

timeS2.addEventListener('click', function handleClick() {
  timeVS = 2;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS3.addEventListener('click', function handleClick() {
  timeVS = 3;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  boolLine=false;
  helloS();
   
});
timeS4.addEventListener('click', function handleClick() {
  timeVS = 4;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS5.addEventListener('click', function handleClick() {
  timeVS = 5;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS6.addEventListener('click', function handleClick() {
  timeVS = 6;
  tTS.innerHTML = 'Time '+ timeVS;
  
  sp=0;
  helloS();
   
});
timeS7.addEventListener('click', function handleClick() {
  timeVS = 7;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS8.addEventListener('click', function handleClick() {
  timeVS = 8;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS9.addEventListener('click', function handleClick() {
  timeVS = 9;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS10.addEventListener('click', function handleClick() {
  timeVS = 10;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS11.addEventListener('click', function handleClick() {
  timeVS = 11;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS12.addEventListener('click', function handleClick() {
  timeVS = 12;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS13.addEventListener('click', function handleClick() {
  timeVS = 13;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS14.addEventListener('click', function handleClick() {
  timeVS = 14;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});
timeS15.addEventListener('click', function handleClick() {
  timeVS = 15;
  tTS.innerHTML = 'Time '+ timeVS;
  sp=0;
  helloS();
   
});


//console.log(timeV);



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
   
});

timeB2.addEventListener('click', function handleClick() {
  timeV = 2;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB3.addEventListener('click', function handleClick() {
  timeV = 3;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB4.addEventListener('click', function handleClick() {
  timeV = 4;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB5.addEventListener('click', function handleClick() {
  timeV = 5;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB6.addEventListener('click', function handleClick() {
  timeV = 6;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB7.addEventListener('click', function handleClick() {
  timeV = 7;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB8.addEventListener('click', function handleClick() {
  timeV = 8;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB9.addEventListener('click', function handleClick() {
  timeV = 9;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB10.addEventListener('click', function handleClick() {
  timeV = 10;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB11.addEventListener('click', function handleClick() {
  timeV = 11;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB12.addEventListener('click', function handleClick() {
  timeV = 12;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB13.addEventListener('click', function handleClick() {
  timeV = 13;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB14.addEventListener('click', function handleClick() {
  timeV = 14;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});
timeB15.addEventListener('click', function handleClick() {
  timeV = 15;
  tT.innerHTML = 'Time '+ timeV;
  hello();
   
});

//console.log(timeV);









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
else
{
    day1 = day;
}
let month = date.getMonth() + 1;
if(month/10 < 1)
{
   month1 = '0'+month;
}
else
{
  month1 = month;
}
let year = date.getFullYear();

let currentDate = `${year}-${month1}-${day1}`;
//console.log(currentDate)
const db = getFirestore();

let theDate = currentDate;
let theDateS = currentDate;


const dateIn = document.getElementById('dateIn');
dateIn.addEventListener('change', (event) =>{
    const selectedDate = event.target.value;
    theDate = selectedDate;
    hello();
     
});


const dateInS = document.getElementById('dateInS');
dateInS.addEventListener('change', (event) =>{
    const selectedDate = event.target.value;
    theDateS = selectedDate;
    sp = 0;
    helloS();
     
});



////////////////////////////////////////////////////////////

// Create an array to store time strings


// Display the result
hello();


async function hello()
{

const docRef = doc(db, theDate,"09:14");
const docSnap = await getDoc(docRef);

let originalString = docSnap.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = docSnap.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

//console.log(ex1);

// const ex1 = 
const exOne = JSON.parse(ex1);
const exTwo = JSON.parse(ex2);
document.getElementById("ex1").innerHTML = "Expiry- " + exOne[0].expiryDate;

document.getElementById("ex2").innerHTML = "Expiry- " + exTwo[0].expiryDate;
//console.log(exOne[0].expiryDate)
  
  //Clear left side
  const list = document.getElementById("ls")
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

const q = query(collection(db,theDate));
let a = 0;
const querySnapshot = await getDocs(q);
// Convert the querySnapshot to an array
const documentsArray = querySnapshot.docs;

documentsArray.reverse();

documentsArray.forEach((doc)=>{
 

let originalString = doc.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = doc.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

// //console.log(ex1);

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
//console.log(callT);

});
}

async function helloS()
{
let l = 0;
const docRef = doc(db, theDateS,"09:14");
const docSnap = await getDoc(docRef);

let originalString = docSnap.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');



//console.log(ex1);

// const ex1 = 
const exOne = JSON.parse(ex1);

// //console.log(exOne[0].expiryDate)
  
  //Clear left side
  const list = document.getElementById("leftT")
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
const list2 = document.getElementById("midT")
  while (list2.hasChildNodes()) {
    list2.removeChild(list2.firstChild);
  }
  const list3 = document.getElementById("rightT")
  while (list3.hasChildNodes()) {
    list3.removeChild(list3.firstChild);
  }
const q = query(collection(db,theDateS));
let a = 0;
console.log(l);
const querySnapshot = await getDocs(q);
// Convert the querySnapshot to an array
const documentsArray = querySnapshot.docs;

documentsArray.reverse();

documentsArray.forEach((doc)=>
{
 
let originalString = doc.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = doc.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

const exOne = JSON.parse(ex1);
const exTwo = JSON.parse(ex2);

let tradedV = 0;
let strikePriceMax = 0;

let newP = 0;
console.log(doc.id);
for(let i = 0; i <= 19; i++)
{
    if(exOne[i].CE.totalTradedVolume > tradedV)
    {
      tradedV = exOne[i].CE.totalTradedVolume;
      strikePriceMax = i;
    
    }
}
 
//if(a%timeVS != 0)
//{
  newP = sp;
//} 
if( exOne[strikePriceMax].strikePrice != sp)
 {
    // if (aaa!=1)
    //   {
    boolLine = true;
    //   }
    sp = exOne[strikePriceMax].strikePrice;
 }
 else
 {
  boolLine = false;
  //sp = exOne[strikePriceMax].strikePrice;

}

//newP = exOne[strikePriceMax].strikePrice;
let tradedVPUT = 0;
let strikePriceMaxPUT = 0;
for(let i = 0; i <= 19; i++)
{
    if(exOne[i].PE.totalTradedVolume > tradedVPUT)
    {
       tradedVPUT = exOne[i].PE.totalTradedVolume;
      strikePriceMaxPUT = i;
    }
}



let oiUpper =  exOne[strikePriceMax].CE.changeinOpenInterest + exOne[strikePriceMax-1].CE.changeinOpenInterest;
let oiUnder = exOne[strikePriceMaxPUT].PE.changeinOpenInterest + exOne[strikePriceMaxPUT+1].PE.changeinOpenInterest;



let oiUpper1 =  exOne[strikePriceMax].CE.changeinOpenInterest + exOne[strikePriceMax+1].CE.changeinOpenInterest;
let oiUnder1 = exOne[strikePriceMaxPUT].PE.changeinOpenInterest + exOne[strikePriceMaxPUT-1].PE.changeinOpenInterest;


let oiUpper2 =  exOne[strikePriceMax].CE.changeinOpenInterest + exOne[strikePriceMax+1].CE.changeinOpenInterest + exOne[strikePriceMax-1].CE.changeinOpenInterest;
let oiUnder2 = exOne[strikePriceMaxPUT].PE.changeinOpenInterest + exOne[strikePriceMaxPUT-1].PE.changeinOpenInterest + exOne[strikePriceMaxPUT+1].PE.changeinOpenInterest




let callT = 0
let putT = 0


if(boolLine == true)
{
  createTableLeft(doc.id,oiUpper,oiUnder,oiUpper-oiUnder,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue,boolLine, newP);
    createTableMid(doc.id,oiUpper1,oiUnder1,oiUpper1-oiUnder1,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue);
    createTableRight(doc.id,oiUpper2,oiUnder2,oiUpper2-oiUnder2,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue);
}
else{
if(a%timeVS == 0)
{
   // aaa=2;
    createTableLeft(doc.id,oiUpper,oiUnder,oiUpper-oiUnder,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue,boolLine, newP);
    createTableMid(doc.id,oiUpper1,oiUnder1,oiUpper1-oiUnder1,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue);
    createTableRight(doc.id,oiUpper2,oiUnder2,oiUpper2-oiUnder2,Math.round((putT/callT + Number.EPSILON) * 100) / 100,Math.round(((callT/(putT+callT)) + Number.EPSILON) * 100) + '% , '+ (Math.round(((putT/(putT+callT)) + Number.EPSILON) * 100) + '%') ,exOne[9].CE.underlyingValue);


}
}
a++;
//console.log(callT);

});

getIds();
getIdsPUT();
console.log(mainc);










}

function createTableLeft(time, call,put,diff,pcr,pc,underV, orNot,val)
{
  const mainC = document.createElement('div');
  mainC.classList.add('mainC')
  console.log('ss' + val + '  ' + orNot) 
  if(orNot == true)
    {
      const lineWithText = document.createElement('div');
  lineWithText.textContent = '────────── '+ val + '──────────';
  mainC.appendChild(lineWithText);
      boolLine = false;  
    }
  const container = document.createElement('div');
  container.classList.add('container');
    mainC.appendChild(container);
   


    const column1 = document.createElement('div');
    column1.classList.add('column');
    column1.id = "time2";

    column1.innerHTML = time;

    container.appendChild(column1);

    const column2 = document.createElement('div');
    column2.classList.add('column');
    column2.id = "calll";
    column2.innerHTML = call;
    container.appendChild(column2);

    const column3 = document.createElement('div');
    column3.classList.add('column');
    column3.id = "putt";
    column3.innerHTML = put;
    container.appendChild(column3);

    const column4 = document.createElement('div');
    column4.classList.add('column');
    column4.id = "diff2";
    column4.innerHTML = diff;
    container.appendChild(column4);
    
    const v = document.getElementById("leftT");
    v.appendChild(mainC);
}

const docRef = doc(db, theDateS,"09:40");
const docSnap = await getDoc(docRef);

let originalString = docSnap.data().Expiry1;
let ex1 = originalString.replace(/'/g, '"');

let originalString1 = docSnap.data().Expiry2;
let ex2 = originalString1.replace(/'/g, '"');

console.log('ookokok');

const exOne = JSON.parse(ex1);
const exTwo = JSON.parse(ex2);
let ti = 0;

for(let i = 0; i <= 19; i++)
{
    if(exOne[i].CE.totalTradedVolume > ti)
    {
      ti = exOne[i].CE.totalTradedVolume;
      priceBefore = i;
    
    }
    
}
helloS();
//document.getElementById("ex1").innerHTML = "Expiry- " + exOne[0].expiryDate;

//document.getElementById("ex2").innerHTML = "Expiry- " + exTwo[0].expiryDate;
//console.log(exOne[0].expiryDate)

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



function createTableMid(time, call,put,diff,pcr,pc,underV)
{
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

    const v = document.getElementById("midT");
    v.appendChild(container);
}


function createTableRight(time, call,put,diff,pcr,pc,underV)
{
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

    const v = document.getElementById("rightT");
    v.appendChild(container);
}



function getIds(){

mainc = 0;

const parent = document.getElementById('leftT');

  const containers = parent.querySelectorAll('.container');

  let count = 1;

  containers.forEach(container => {
    const callDiv = container.querySelector('[id^="calll"]');
    if (callDiv) {
      callDiv.id = 'calll' + count;
      count++;
    }
  });
  mainc = count;
  console.log(document.getElementById('calll2').style.background);
  let x = 0;
  let col = '';
  for (let i = mainc-1; i >= 1; i--) {
  if(parseInt(document.getElementById('calll' + i).innerHTML) > x)
  {
    document.getElementById('calll' + i).style.background = 'red';
    x = parseInt(document.getElementById('calll' + i).innerHTML);
    col = 'red';
  }
  else if(parseInt(document.getElementById('calll' + i).innerHTML) < x){
document.getElementById('calll' + i).style.background = 'green';
x = parseInt(document.getElementById('calll' + i).innerHTML);
col = 'green';
  }
  else{
    console.log('hellooo');
      document.getElementById('calll' + i).style.background = col;
  
  }
}
}


function getIdsPUT(){

mainc = 0;

const parent = document.getElementById('leftT');

  const containers = parent.querySelectorAll('.container');

  let count = 1;

  containers.forEach(container => {
    const callDiv = container.querySelector('[id^="putt"]');
    if (callDiv) {
      callDiv.id = 'putt' + count;
      count++;
    }
  });
  mainc = count;
  let x = 0;
  let col = '';
  for (let i = mainc-1; i >= 1; i--) {
  if(parseInt(document.getElementById('putt' + i).innerHTML) < x)
  {
    document.getElementById('putt' + i).style.background = 'red';
    x = parseInt(document.getElementById('putt' + i).innerHTML);
    col = 'red';
  }
  else if(parseInt(document.getElementById('putt' + i).innerHTML) > x){
document.getElementById('putt' + i).style.background = 'green';
x = parseInt(document.getElementById('putt' + i).innerHTML);
col = 'green';
  }
  else{
    console.log('hellooo');
      document.getElementById('putt' + i).style.background = col;
  
  }
}
}
