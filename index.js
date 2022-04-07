const express=require('express')

const app=express()


const messages = [//messages is an array which will be iterated
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
 //res.send('this is the index page')
 res.render('index',{messages:messages})
})

app.get('/new',(req,res)=>{
 res.sendFile('/home/amar/development/mini-message-board/public/forms.html')
})

app.post('/new',(req,res)=>{
    console.log(`${req.body.firstName} ${req.body.message}`)
    messages.push({text:req.body.message,user:req.body.firstName,added:new Date()})
    res.redirect('/')
})

app.listen(8080)