let p=new Promise((resolve, reject)=> {
    let a=1+5
    if(a==2) {
    resolve(" Try Success")
    }
    else
    {
    reject(" Catch Fail")
    }
    })
    
    p.then((message)=> {
    console.log("This is in then", message)
    }).catch((message)=>{
    console.log("This is in catch", message);
    })