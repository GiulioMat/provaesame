const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const User = require('./models/user');

app.use(express.static('./public'))

var assignment = User.findOrCreate({
    taskID: '1234',
    assignmentID : 'nick', 
    pasworkerID: 'nick',
    assignmentResult: true 
  });

app.get("/", function(req,res){
    res.send("Pippo");
})

app.listen(PORT, () => console.log('Example app listening on port: ' + PORT))

// authentication routes
var user = require('./routes/users');
app.use('/users', user);

