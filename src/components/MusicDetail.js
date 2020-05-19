import React from 'react';

const MusicDetail = (props) => {
    if(!props.music) return null;
    return (
        <>
        <h3>Title: {props.music.title.label}</h3>
        <h3>Category: {props.music.category.attributes.label}</h3>
        <h3>Price: {props.music['im:price'].label}</h3>
        <p><img src={props.music['im:image'][2].label}></img></p>
        </>
    )
}

export default MusicDetail;