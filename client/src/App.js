import React from 'react';
import './App.css';
import FileUpload from './components/fileUpload';

var App = () =>  (
    <div className="container mt-4">
    
    <h4 className="display-4 text-center mb-4">
      <i className = "fab fa-react"></i> Express and React Upload
    </h4>

    <FileUpload />



    </div>
  );


export default App;
