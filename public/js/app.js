console.log('Loaded the client side javascript');
// fetch('http://localhost:4000/weather?address=pakistan').then(res=>res.json().then(data=>{
//     if(data.errorMessage){
//         console.error(data.errorMessage);
//     }
//     else{
//         console.log(data);
//     }
// }))

const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
weatherForm.addEventListener('click',function(e){
    e.preventDefault();
    console.log('submitted');
    const location=search.value;
    console.log(location);

    fetch(`http://localhost:4000/weather?address=${location}`).then(res=>res.json().then(data=>{
     if(data.errorMessage){
         console.error(data.errorMessage);
     }
    else{
         console.log(data);
    }
 }))

})