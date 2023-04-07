let marks=()=>{
    let x=document.getElementById('name').value;
    let y=parseInt(document.getElementById('math').value);
    let z=parseInt(document.getElementById('wt').value);
    let w=parseInt(document.getElementById('dsa').value);
    let obj={
        name:x,
        maths:y,
        webt:z,
        dsa:w
    }
    add(obj);
    console.log(obj)
}

var A= [];

function add(obj)
{
    A.push(obj);
    display(A);
}

function display(itemArray)
{
    document.getElementById("list").innerHTML=null;
    itemArray.forEach((e,i)=>{
        p=document.createElement('li');
        p.textContent = e.name;  
        document.getElementById("list").appendChild(p)
    })
    let arr1=itemArray.filter(()=>{
        return y<35||z<35||w<35;
    })
    arr1.forEach((e,i)=>{
        q=document.createElement('li');
        q.textContent = e.name;  
        document.getElementById("list1").appendChild(q)
    })    
}