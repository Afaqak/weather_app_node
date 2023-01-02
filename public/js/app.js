
const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const message1=document.querySelector('.message-1');
const message2=document.querySelector('.message-2');


weatherForm.addEventListener('click',function(e){
    e.preventDefault();

    message1.textContent='loading...';

    const location=search.value;
    console.log(location);
    message2.textContent='';
    if(!location) return;
    fetch(`http://localhost:8000/weather?address=${location}`).then(res=>res.json().then(data=>{
     if(data.errorMessage){
        message1.textContent=data.errorMessage;
     }
    else{
        console.log(data);
         message1.textContent=`currently ${data.forecast.weather_descriptions[0]},
         feels like ${data.forecast.feelslike} with temperature ${data.forecast.temperature}
         `;
         message2.textContent=data.address;
    }
 }))

})