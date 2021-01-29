import React from "react";

const Header = (props) => {
    return (

        <div className= "App-header">
            <header>
              <h2>  {props.text}</h2>
                </header>
        </div>
    )
}

export default Header;