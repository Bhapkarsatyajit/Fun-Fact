import React from "react";
import Reactlogo2 from "../images/react-logo_2.png"

export default function Main(){
    return (

        <main>
            <h1 className="main--tile">Fun facts about React</h1>
            <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
             <li>Has well over 100K stars on GitHub</li>
             <li>Is maintained by Facebook</li>
             <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}