import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Upload extends Component {
    
    switchNameHandler = () =>{
        console.log(this.handle.fileUrl);
        
      }
      handle(event){
          
          let fileUrl = event.target.value;
          console.log(fileUrl);
          urlTexty
          return (fileUrl);
      }

  render(){  
    return(
        
        <div className = "upload">
            <span>Upload your eBook</span>
            <div className="uploadTabs">
    <Button color="default" onClick={this.switchNameHandler}>Upload File From Text File!!!! V3</Button>
  <Button color="primary">Upload From Device</Button>
  <TextField  onChange={ this.handle.bind(this)} id="standard-basic" label="TXT / PDF File URL" />
 
</div>
        </div>
        
    );
}
}

export default Upload;