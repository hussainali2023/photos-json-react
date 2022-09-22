import React, { Component, useState } from 'react';

function Photos () {
   const [albums, setAlbums] = useState([])
   useState(()=> {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => console.log(data))
   }, [])
        return (
            <div>
               <h1>Hey there i am exploring React JS</h1> 
                
            </div>
        );
}

export default Photos;