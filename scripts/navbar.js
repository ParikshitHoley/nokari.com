window.onload=function clod()
{
    let jobs=document.querySelector(".jobs");
  jobs.style.display="none";
  let company=document.querySelector(".company");
  company.style.display="none";
  let service=document.querySelector(".service");
  service.style.display="none";
}

let job = document.getElementById("job");
job.addEventListener("mousemove",find)
function find()
{
    let company=document.querySelector(".company");
  company.style.display="none";
  let jobs=document.querySelector(".jobs");
  jobs.style.display="flex";
  let service=document.querySelector(".service");
  service.style.display="none";
}
let jobs=document.querySelector(".jobs");
jobs.addEventListener("mouseover",find)
jobs.addEventListener("mouseout",ded);
function ded()
{
    let company=document.querySelector(".company");
  company.style.display="none";
    let jobs=document.querySelector(".jobs");
  jobs.style.display="none";
  let service=document.querySelector(".service");
  service.style.display="none";
}

// --------------------------------------------

let comp = document.getElementById("comp");
comp.addEventListener("mousemove",find1)

let company=document.querySelector(".company");
company.addEventListener("mouseover",find1)
company.addEventListener("mouseout",ded1);

function ded1()
{
    let jobs=document.querySelector(".jobs");
  jobs.style.display="none";
    let company=document.querySelector(".company");
  company.style.display="none";
  let service=document.querySelector(".service");
  service.style.display="none";
}
function find1()
{
    let jobs=document.querySelector(".jobs");
  jobs.style.display="none";
  let service=document.querySelector(".service");
  service.style.display="none";

  let company=document.querySelector(".company");
  company.style.display="flex";
}

// --------------------------------------------
let Services = document.getElementById("Services");
Services.addEventListener("mousemove",find2)

let service=document.querySelector(".service");
service.addEventListener("mouseover",find2)
service.addEventListener("mouseout",ded2);

function ded2()
{
    let jobs=document.querySelector(".jobs");
  jobs.style.display="none";
    let company=document.querySelector(".company");
  company.style.display="none";
  let service=document.querySelector(".service");
  service.style.display="none";
  
}
function find2()
{
    let jobs=document.querySelector(".jobs");
  jobs.style.display="none";

  let company=document.querySelector(".company");
  company.style.display="none";
  let service=document.querySelector(".service");
  service.style.display="flex";
}


let regis=document.getElementById("regis");
regis.addEventListener("click",goregis);
function goregis()
{
  window.location.href="register.html";
}

let it=document.getElementById("gotoit");
it.onclick=function()
{
  window.location.href="it.html";
}