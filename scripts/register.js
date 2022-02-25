 // username==Parikshit_Patil
    // pass= Parikshit@123

    async function register(event)
    {
       try{
        event.preventDefault();
        var register_data = {
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            username:document.getElementById("username").value,
            mobile:document.getElementById("mobile").value,
            description:document.getElementById("description").value
        },
        register_data= JSON.stringify(register_data);
        
       }
       catch(err)
       {
           console.log("error in register",err);
       }

       let reg_api=`https://masai-api-mocker.herokuapp.com/auth/register`;

       let resp = await fetch(reg_api,{
           method:"POST",
           body:register_data,
           headers:{
               "Content-Type":"application/json",
               
           }



       })

       let data= await resp.json();
       console.log(data);
       if(data.error==false)
       {
           alert("Registeration Sucess")
           window.location.href="landing.html"
       }
       else{
           alert("User already Exist...")
       }
    }

      