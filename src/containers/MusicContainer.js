import React from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';
import './MusicContainer.css';

class MusicContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            musics: [],
            selectedMusicID: ''
        };
        this.handleMusicSelected = this.handleMusicSelected.bind(this);
    }

    handleMusicSelected(id){
        this.setState({selectedMusicID: id })
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
        fetch(url)
        .then(res => res.json())
        .then(result => this.setState({musics: result.feed.entry}))
        .catch(err => console.err(err))
    }

    render(){

        const selectedMusic = this.state.musics.find(
            music => {
                return music.id.attributes['im:id'] === this.state.selectedMusicID
            }
        )
        return (
            <div class="music_container">
                <h2>Music Container</h2>
                <MusicSelector 
                    musics = {this.state.musics}
                    onMusicSelected={this.handleMusicSelected}
                />
                <MusicDetail music={selectedMusic} />
            </div>
        );
    }
}

export default MusicContainer;