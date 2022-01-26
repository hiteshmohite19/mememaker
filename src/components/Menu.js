import React, { useState } from 'react';

function Menu() {

    // const [textClicked,setText]=useState(false)

    const onTextClicked=()=>{
        
    }

    return <div className='menu bg-light' style={{padding:'5px'}}>
        <select className='form-select-sm select-box'>
            <option >Banner Type</option>
            <option value={'singleBanner'}>Single Banner</option>
            <option value={'parallelBanner'}>Parallel Banner</option>
            <option value={'horizontalBanner'}>Horizontal Banner</option>
        </select> &nbsp;
        <button className='btn btn-sm border bg-white' onClick={onTextClicked} style={{marginRight:'7px',padding:"5px"}}>T</button>
        <select className='form-select-sm select-box'>
            <option >Font</option>
            <option value={'singleBanner'}>Single Banner</option>
            <option value={'parallelBanner'}>Parallel Banner</option>
            <option value={'horizontalBanner'}>Horizontal Banner</option>
        </select>
        
        
  </div>;
}

export default Menu;
