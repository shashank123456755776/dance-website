const express=require("express");
const { rmSync } = require("fs");
const path =require("path");
const app =express();
const port =724;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params ={ }
    res.status(200).render('home.pug');
})
app.post('/Contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this data has been stored in database")

}).catch(()=>{
    res.status(400).send("item was not saved to the database")
});
    // res.status(200).render('Contact.pug');
})

app.get('/Contact',(req,res)=>{
    const params ={ }
    res.status(200).render('Contact.pug',params);
})

app.listen(port,()=>{
     console.log(`the application started successfully on port ${port}`);
});