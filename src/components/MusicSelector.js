import React from 'react';
import './MusicSelector.css';

const MusicSelector = (props) => {

    const options = props.musics.map( music => {
        const id = music.id.attributes['im:id'];
        return <option
                value={id}
                key={id}
               >
                    {music.title.label}
                </option>
    })

    function handleChange(event){
        props.onMusicSelected(event.target.value);
    }

    return (
        <div class="custom-select">
            <select id="music-selector" defaultValue="default" onChange={handleChange}>
                <option disabled value="default">Choose a music...</option>
                {options}
            </select> 
        </div>
    )
}

export default MusicSelector;