import React, {useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import './Photos.css'

function Photos () {
   const [albums, setAlbums] = useState([])
   useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => setAlbums(data))
   }, [])
        return (
            <div>
               <h1>Hey there i am exploring React JS</h1> 
               <div className='container'>
               {
                  albums.map(album => <Photo album={album}
                  key={album.id}></Photo>)
               }
               </div>
                
            </div>
        );
}

export default Photos;