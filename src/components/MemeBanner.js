import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';

function MemeBanner() {

    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();

    const imgRef1 = useRef()
    const imgRef2 = useRef()

    useEffect(() => {
        if (img1) {
            console.log(img1);
            const fileReader = new FileReader()
            fileReader.onload=()=>{
                setImg1(fileReader.result)
            }
            fileReader.readAsDataURL(img1)
        } else {
            setImg1(null)
        }

    },[img1])

    useEffect(() => {
        if (img2) {
            const fileReader = new FileReader()
            fileReader.onload=()=>{
                setImg2(fileReader.result)
            }
            fileReader.readAsDataURL(img2)
        } else {
            setImg2(null)
        }

        
    },[img2])

    const bannerType = 'horizontalBanner'
    var banner = ''
    // const singleBanner= <div className=' border singleBanner sinOne' onClick={selectImg('sinOne')}>
    //   <input type={'file'} className='d-none' id='sinOne'/>
    // </div>

    // const parallelBanner=<div className=' parallelBanner row'>
    //     <div className='col border parOne' onClick={selectImg('parOne')}>
    //     <input type={'file'} className='d-none' id='parOne'/>
    //     </div>
    //     <div className='col border parTwo' onClick={selectImg('parTwo')}>
    //     <input type={'file'} className='d-none' id='parTwo'/>
    //     </div>
    // </div>

    const horizontalBanner = <div className=''>
        <div className='horizontalBanner border horiOne' onClick={() => imgRef1.current.click()}>
            <img src={img1} alt='Click to capture image' className='img-responsive' width='400px' height='200px'/>
            <input type='file' className='d-none' ref={imgRef1} accept='image/*' 
            onChange={(e)=>{
                const file=e.target.files[0]
            
                if (file){
                    setImg1(file)
                }else{
                    setImg1(null)
                }
            }}/>
        </div>
        <div className='horizontalBanner border horiTwo'>
            <img src={img2} alt='Click to capture image' className='img-responsive' width='400px' height='200px'/>
            <input type='file' className='d-none' ref={imgRef2} accept='image/*' 
            onChange={(e)=>{
                const file=e.target.files[0]
                if (file){
                    setImg2(file)
                    console.log(file);
                    console.log(e.target.files);
                }else{
                    setImg2(null)
                }
            }}/>
        </div>
    </div>



    // if(bannerType==='singleBanner'){
    //     banner=singleBanner
    // }else if(bannerType==='parallelBanner'){
    //     banner=parallelBanner
    // }else
    if (bannerType === 'horizontalBanner') {
        banner = horizontalBanner
    }
    return <div className='banner container'>
        <Menu />
        
        {banner}
    </div>;
}

export default MemeBanner;
