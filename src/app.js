const express=require('express');
const path=require('path');
const hbs=require('hbs');

//paths for express config
const app=express(express);
const publicDirectory=path.join(__dirname,'../public');
const viewsDirectory=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

//setup handlebars and views locations
app.set('view engine','hbs');
app.set('views',viewsDirectory);
hbs.registerPartials(partialsPath);

//set static directory to serve
app.use(express.static(publicDirectory));

//routes requests
app.get('',(req,res)=>{
    res.render('index',{
        name:'afaq',
        title:'hbs'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',
    {
        title:"hospital",
        name:"afaq"
    })
})

app.get('/help',(req,res)=> {
    res.render('help',{
        title:'helpmee',
        name:'afaq'
    })
})


app.get('/weather',(req,res)=>{
    res.send({
        weather:'sunny',
        name:'afaq'
    });
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:"help article not found",
        name:"Afaq"
    })
    setTimeout(()=>{
        res.redirect('/help');
    },2000)
})



app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:"page not found",
        name:"Afaq"
    })
})

app.listen(4000,()=>{
    console.log('running');
});







// app.get('/help',(req,res)=>{
//     res.send('help help help');
// })

// app.get('/about',(req,res)=>{
//     res.send('about');
// })