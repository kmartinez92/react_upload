var express = require ("express"); 
var fileUpload = require ("express-fileupload"); 

var app = express(); 

app.use(file.upload()); 


//upload endpoint 
app.post('/upload', (req, res) => {

    //code below runs if submit was pressed but no file was selected to be uploaded. 
    if(req.files === null) {
        return res.status(400).json({msg: "No File Uploaded" })
    }

    //we'll define what this is in react 
    var file = req.files.file; 

    file.mv('${__dirname}/client/public/uploads/${file.name}', err => {
        if(err){
            console.error(err); 
            return res.status(500).send(err); 
        }
        res.json({ filename, filePath: '/uploads/${file.name}' });
    });
});


app.listen(5000, () => console.log("server started...")); 