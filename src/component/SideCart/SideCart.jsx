import React, { useEffect, useState } from 'react';
import './SideCart.css'
const SideCart = (props) => {
const {ReadTime,Title}=props;
  
    return (
        <div className='position-sticky top-0'>
            <div className='total-time text-center  rounded p-3  mt-2'>
                <h3 className='fw-bolder'>Spent time on read : {ReadTime} min</h3>
            </div>
            <div className="card-store  bg- p-3">
            <h3 className='fw-bold pt-3'>Bookmarked Blogs : {Title.length}</h3>
            {
                Title.map(title => 
                    <div className='p-3 bg-white my-3 rounded'>
                <h5>{title}</h5>
            </div>)
            }
            
            </div>
        </div>
    );
};

export default SideCart;