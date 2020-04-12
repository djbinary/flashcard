import React from 'react';

function Levels(){
    return(
        <div className="levels">
            <span>Please select difficulty level </span>
            <input type="range" min="1" max="10" value="7" className = "slider"></input>

        </div>
    );
}

export default Levels;