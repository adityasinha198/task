function onSubmit(event){
    event.preventDefault();
    const name=event.target.name.value;
    const emailid=event.target.emailid.value;
    const password=event.target.password.value;
    const username = event.target.username.value
    console.log(name)
    const obj = {
        username,
        name,
        emailid,
        password,
    }
   
    axios.post("http://localhost:8000/register",obj)
    .then(res=>{
        console.log(res)
        if(res.status==200){
            alert("User created")
        }
        console.log(res)
    }).catch(err=>{
        
        if(err.response.status==404){
            alert("Emailid already exists")
        }
    })
}