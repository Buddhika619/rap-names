const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 savage' : {
        'age' : 29,
        'birthName' : "whattt" ,
        'birthLocation' : 'London, UK'
    },
    'chance the rapper' : {
        'age' : 28,
        'birthName' : "chance malli" ,
        'birthLocation' : 'Chicago, Illinois'
    },
    'Dylan' : {
        'age' : 29,
        'birthName' : 'Dylan' ,
        'birthLocation' : 'Dylan'
    },
    
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res)=>{
    const rapperName = req.params.rapperName.toLocaleLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['Dylan'])
    }
    // res.json(rappers) 
})




app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT}`)
})

 




