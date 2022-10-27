window.addEventListener("DOMContentLoaded",()=>{
    const token = localStorage.getItem("token")

    axios.get("http://localhost:8000/profile",{headers :{"Authorisation": token}})

    .then(res =>{
        console.log(res)
        const userinfo = res.data.userinfo
        displayinfo(userinfo)
        
    })
    .catch(err => console.log(err))
    

       
    }
    )


    function displayinfo(userinfo){

        const showinfo = document.getElementById("profile")

        const username = userinfo.username
        const name = userinfo.name
        const email = userinfo.email

        const lis = document.createElement("li")
        lis.innerHTML = `FULL NAME - ${name} USERNAME - ${username} EMAIL - ${email}`

        showinfo.appendChild(lis)
    
    }
    
    

