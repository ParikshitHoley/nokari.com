let logpage = document.getElementById("logpage");
    let clic=document.getElementById("clic");
    clic.onclick = function()
    {
        logpage.style.transform="translateX(-400px)";
        
        
    }
    let cross=document.getElementById("cross");
    cross.onclick=function()
    {
        logpage.style.transform="translateX(+400px)";
    }


    // --------------------------------------------------------



    async function login(event)
    {
       try{
        event.preventDefault();
        var log_data = {
            username:document.getElementById("username_log").value,
            password:document.getElementById("password_log").value
        }
    
        log_data=JSON.stringify(log_data);
       }
    
       catch(err)
       {
    
           console.log(err);
           
       }
    
       let login_api=`https://masai-api-mocker.herokuapp.com/auth/login`;
       let responce =await fetch(login_api,{
           method:"POST",
           body:log_data,
           headers:{
               "Content-Type":"application/json",
           },
       })
       let data = await responce.json();
       console.log(data);
       let user= document.getElementById("username_log").value;
       let tok = data.token;
       getuser(user,tok);
       async function getuser(use,toke)
       {
          try{
            let user_api =`https://masai-api-mocker.herokuapp.com/user/${use}`;
        
            let repo = await fetch(user_api,{
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${toke}`,
                },
               
            });
            let deto = await repo.json();
            console.log(deto);
            let name = deto.username;
            localStorage.setItem("name1",name)
            let logname =document.getElementById("logname");
            logname.innerHTML=name;
            alert("login sucess")
            
            
    
            
            
            
          }
          catch(err)
          {
              console.log(err);
          }
       }
    }