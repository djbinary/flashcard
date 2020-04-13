import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Upload extends Component {
    
    

  render(){  
    return(
        
        <div className = "upload">
            <span>Upload your eBook</span>
            <div className="uploadTabs">
    <Button color="default" onClick={this.switchNameHandler}>Upload File From Text File!!!! V2</Button>
  <Button color="primary">Upload From Device</Button>
  <TextField  id="standard-basic" label="TXT / PDF File URL" />
 
</div>
        </div>
        
    );
}
}

export default Upload;