import React,{useState} from 'react';

function Download() {

    // const [btnMode,setBtnMode]=useState('disabled')
    let btnMode=''

    return <div className={btnMode=='enabled'?'enabled mt-3':'disabled mt-3'}>
        <button className='btn btn-sm btn-secondary'>Download</button>
    </div>;
}

export default Download;
