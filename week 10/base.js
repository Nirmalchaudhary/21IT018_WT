const apiurl="https://api.nationalize.io";
async function callapi(){
    const username=document.getElementById("idname").value;
    const querystring=`name=${username}`
    
    const resdata=await fetch(`${apiurl}?${querystring}`);
    const data=await resdata.json();
    console.log(data);
    document.getElementById("idapires").innerHTML=`<tr style="width: 15rem;"><th>NAME :- </th><th>${data.name}</th></tr><tr style="width: 15rem;"><th>COUNTRY NAME</th><th>PROBABILITY</th></tr>`;
    console.log(data.country)
    const arr=data.country;
   for(let i in arr)
   {
    document.getElementById("idapires").innerHTML+=`<tr><th style="width: 15rem;">${arr[i].country_id}</th><th style="width: 15rem;">${arr[i].probability}</th></tr>`;
   }
    
}