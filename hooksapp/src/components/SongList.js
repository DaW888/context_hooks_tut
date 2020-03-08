import React, {useEffect, useState} from 'react';
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home'},
        {title: 'memory gospel'},
        {title: 'this wold darkness'},
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => setSongs([...songs, {title}]);

    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs]);

    useEffect(() => {
        console.log('useEffect hook ran', age);
    }, [age]);

    return (
        <>
            <div className='song-list'>
                <ul>
                    {songs.map((song, i) => <li key={i}>{song.title}</li>)}
                </ul>
            </div>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>add 1 to age: {age} </button>
        </>

    );
};

export default SongList;