import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <h2 className="fs-2 fw-bold">Knowledge Cafe</h2>
                <div className="profile">
                    <img className="image rounded-circle w-full " src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg?w=360" alt="" />
                </div>
               
             </div>
           </nav> 
        </div>
    );
};

export default Header;