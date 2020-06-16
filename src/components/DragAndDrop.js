import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import parse from "papaparse";

function DragAndDrop() {
  
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async(file) => {
      
      let fileName = file.name;
      console.log("file name: ",fileName); 

      if(fileName.slice(fileName.lastIndexOf('.')+1) === "csv"){
       console.log("excel file");
       console.log(file);
       
        const text = await file.text();
        console.log(text);
       
      }   
      else{
        console.log("other file");
        alert("Please upload the excel file only");
      }
      
    })
    
  }, [])

  

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop})
  const files = acceptedFiles.map(file => (
    <li key={file.soc}>
      {file.soc_title} - {file.foc_title}
    </li>
    ));
  return (
    <section className="container" style={{width:"auto", height:"auto", marginTop:"30px", padding:"0px", backgroundColor:"white"}}>
      <div {...getRootProps({className: 'dropzone'})} style={{backgroundColor:"#1a2e3f", width:"auto", height:"280px", border:"1px dotted white", color:"white", textAlign:"center"}}>
        <input {...getInputProps()}/>
        <img src="./images/upload_icon.png" alt="upload icon" style={{width:"50px", height:"50px", marginTop:"8%"}}/>
        <p>Drag and Drop to upload <br/> Or click to browse</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DragAndDrop;