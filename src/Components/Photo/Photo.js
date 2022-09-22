import React from 'react';
import './Photo.css'

function Photo (props) {
    console.log(props.album)
    const {id, thumbnailUrl, title} = props.album
    // console.log(title)
        return (
            <div className='div'>
                 <p>Id: {id}</p>
                <img src={thumbnailUrl} alt="" />
                <p>Title: {title}</p>
               

            </div>
        );
}

export default Photo;