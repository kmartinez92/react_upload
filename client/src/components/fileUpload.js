import React, {Fragment, useState}  from 'react'
import axios from 'axios';


//this is where all the state will go
var FileUpload = () => { 

    var [file, setFile] = useState('');
    var [filename, setFilename] = useState('Choose File');
    var [uploadedFile, setUploadedFile] = useState({});

    var onChange = e => {

        //code  below determines that only one file can be uploaded at a time - we do that by selecting the zero within the index. 
        setFile(e.target.files[0]); 

        //code below is adding the property of name
        setFilename(e.target.files[0].name); 
    };

    var onSubmit = async e => {

        e.preventDefault();
        var formData = new FormData();
        formData.append('file', file);

        try{
          var res = await axios.post('/upload', formData, {

            headers: {'Content-Type': 'multipart/form-dat'}
          });

          var {fileName, filePath} = res.data;

          setUploadedFile([fileName, filePath]);



        }catch(err) {

            if(err.response.status === 500) {

                console.log('there was a problem with the server')
            }

            else {

                console.log(err.response.data.msg);
            }


        }
    };

    return ( 
        <Fragment>
            <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
                <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
            </div>

            <input type="submit" value="upload" className="btn btn-primary btn-block mt-4 "></input>


            </form>

            {uploadedFile ? (<div className ="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">{ uploadedFile.fileName}</h3>
                    <img style={{width: '100%'}} src={uploadedFile.filePath}>


                    </img>

                    
                </div>

            </div>) : null}
        


        </Fragment>


    )


}

export default FileUpload