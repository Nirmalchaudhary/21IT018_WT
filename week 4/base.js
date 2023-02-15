function car(){
    const car ={
        name : "AUDI RS7",
        prise : "2.23 Crore",
        color : "black",
        weight : "2124 kg"
        };
        disp(car);
}
function bike(){
    const bike ={
        name : "Harly-devidsion",
        prise : "0.5 Crore",
        color : "silver",
        weight : "306 kg"
        };
        disp(bike)
}
function phone(){
    const phone ={
        name : "i phone 15 pro max",
        prise : "10 Crore",
        color : "Golden",
        weight : "400 gm"
        };
        disp(phone);
}
let j=0;
function disp(wisharr)
{
    if(j!=0)
    document.getElementById("wish").innerHTML=null;
    
    for (let i in wisharr){
        document.getElementById("wish").innerHTML+=`<tr><th>${i}</th><td>${wisharr[i]}</td></tr>`;
    }
    j++;
}