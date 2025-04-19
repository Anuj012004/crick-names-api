const express = require('express')
const app = express()
const path = require('path')
const PORT = 8000
const cricketers = {
    'virat kohli': {
      age: 35,
      birthDate: 'November 5, 1988',
      birthLocation: 'Delhi, India'
    },
    'rohit sharma': {
      age: 37,
      birthDate: 'April 30, 1987',
      birthLocation: 'Nagpur, Maharashtra, India'
    },
    'ms dhoni': {
      age: 43,
      birthDate: 'July 7, 1981',
      birthLocation: 'Ranchi, Jharkhand, India'
    },
    'sachin tendulkar': {
      age: 51,
      birthDate: 'April 24, 1973',
      birthLocation: 'Mumbai, Maharashtra, India'
    },
    'rahul dravid': {
      age: 51,
      birthDate: 'January 11, 1973',
      birthLocation: 'Indore, Madhya Pradesh, India'
    },
    'unknown':{
        'age' :0,
        'bithName' : 'unknown',
        'bithLoation' : 'unknown'
    }
  };
  


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api/:name',(req,res)=>{
   const cricName = req.params.name.toLowerCase()
   if(cricketers[cricName]){
    res.json(cricketers[cricName])
   }else{
    res.json(cricketers['unknown'])
   }
   
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
