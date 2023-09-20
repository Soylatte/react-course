import React from "react";



function App () {
    const [minutes, seMinutes] = React.useState();
    const onChange = () => {
        console.log("somebody wrote");
    };
    return (
        <div>
            <h1>Super Converter</h1>
            <label htmlFor="minutes">Minutes</label>
            <input value={minutes}
            id="minutes" 
            placeholder="Minutes" 
            type="number"></input>
            <input placeholder="Hours" type="number"></input>
        </div>

    );
}