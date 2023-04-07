let valid =()=>{
    let x=document.getElementById('username').value;
    let y=document.getElementById('password').value;
    let isvalid=true;
    if(x.length==0)
    {
        document.getElementById('userspan').textContent="Enter username!!"
        isvalid=false;
    }
    else{
        document.getElementById('userspan').textContent="";
    }
    if(y.length==0)
    {
        document.getElementById('passspan').textContent="Enter password!!"
        isvalid=false;
    }
    else{
        document.getElementById('passspan').textContent="";
    }
   if(isvalid)
   {
     document.sub.submit();
   }
}