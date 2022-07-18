import { useState } from "react";
export default function Component() {
    const[message] = useState("Welcome to Techmojo:")
    return(
        <div className="App">
            <h1>{message}</h1>
        </div>
    );
};