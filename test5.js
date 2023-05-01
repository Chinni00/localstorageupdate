let inputName=document.getElementById('name');
let inputEmail=document.getElementById('email');
let inputPhone=document.getElementById('phone');

let bookBtn=document.getElementById('bookBtn');
let getBtn=document.getElementById('getBtn');
let list=document.getElementById('list');

bookBtn.addEventListener('click',()=>{
    let obj={
        Name:inputName.value,
        Email:inputEmail.value,
        Phone:inputPhone.value
    }
    let existingData=JSON.parse(localStorage.getItem('appointmentData'));
    if(!existingData ){
        existingData=[]
    }
    existingData.push(obj);
    localStorage.setItem('appointmentData',JSON.stringify(existingData))
    inputName.value='';
    inputEmail.value='';
    inputPhone.value='';
})

getBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let data=JSON.parse(localStorage.getItem('appointmentData'));
    if(!data || data.length==0){
         list.innerText='data not found'
    }
    
    for(var student of data){
        let li=document.createElement('li');
        li.innerHTML=`Name:${student.Name} - Email:${student.Email} - Phone:${student.Phone}`
        list.appendChild(li)
    }
    
})