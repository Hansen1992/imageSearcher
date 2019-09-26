import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/> //key prop er altid godt at bruge til når du skal fremkalde en liste af items, da den sørger for at identificere billederne hver især med et id. Key'en skal altid assignes root-elementet, så hvis <img> var inde i en div, så var det div'en der skulle have key proppen. 
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;