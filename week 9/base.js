let check=()=>{


let x=document.getElementById('age').value;
let y=document.getElementById('height').value;
let mypromise = new Promise((resolve,reject)=>{
  if(x<100)
  {
    resolve(x);
  }
  else{
    reject(x);
  }
});
let yourpromise = new Promise((resolve,reject)=>{
    if(y<6.5)
    {
      resolve(y);
    }
    else{
      reject(y);
    }
  });


// mypromise.then((result) => {
//         document.getElementById('new').innerHTML=`Your Age is ${result}`;
// }).catch((err) => {
//     document.getElementById('new').innerHTML="Invalid input"
// });

Promise.all([mypromise,yourpromise]).then((result) => {
     document.getElementById('new').innerHTML+=`<tr><th>${result[0]}</th><th>${result[1]}</th></tr>`;
     }).catch((err) => {
         document.getElementById('new').innerHTML="Invalid input"
     });
}


