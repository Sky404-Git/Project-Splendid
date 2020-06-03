<<<<<<< HEAD
import React from 'react';
import {useDropzone} from 'react-dropzone';

function DragAndDrop(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container" style={{width:"auto", height:"auto", marginTop:"30px", padding:"0px", backgroundColor:"white"}}>
      <div {...getRootProps({className: 'dropzone'})} style={{backgroundColor:"#1a2e3f", width:"auto", height:"280px", border:"1px dotted white", color:"white", textAlign:"center"}}>
        <input {...getInputProps()} />
        <img src="./upload_icon.png" alt="upload icon" style={{width:"50px", height:"50px", marginTop:"8%"}}/>
        <p>Drag and Drop to upload <br/> Or click to browse</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

=======
import React from 'react';
import {useDropzone} from 'react-dropzone';

function DragAndDrop(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container" style={{width:"auto", height:"auto", marginTop:"30px", padding:"0px", backgroundColor:"white"}}>
      <div {...getRootProps({className: 'dropzone'})} style={{backgroundColor:"#1a2e3f", width:"auto", height:"280px", border:"1px dotted white", color:"white", textAlign:"center"}}>
        <input {...getInputProps()} />
        <img src="./upload_icon.png" alt="upload icon" style={{width:"50px", height:"50px", marginTop:"8%"}}/>
        <p>Drag and Drop to upload <br/> Or click to browse</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

>>>>>>> d27491cc133504da9f7ae1d27d8652144ceb20bc
export default DragAndDrop;