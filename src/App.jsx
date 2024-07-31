import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App = () => {
  const mydata = [
    {
        "artist_name": "John Doe",
        "song_name": "Summer Breeze",
        "image": "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",
        "added": false
    },
    {
        "artist_name": "Jane Smith",
        "song_name": "Morning Light",
        "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
        "added": false
    },
    {
        "artist_name": "The Wanderers",
        "song_name": "Endless Journey",
        "image": "https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "added": true
    },
    {
        "artist_name": "DJ Night",
        "song_name": "Midnight Beats",
        "image": "https://plus.unsplash.com/premium_photo-1720823182783-3b9fb27e40d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        "added": false
    },
    {
        "artist_name": "Alice & Bob",
        "song_name": "Harmony",
        "image": "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww",
        "added": false
    },
    {
        "artist_name": "The Strummers",
        "song_name": "Acoustic Vibes",
        "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww",
        "added": false
    },
    {
        "artist_name": "Soul Singers",
        "song_name": "Deep Feelings",
        "image": "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fHww",
        "added": false
    },
    {
        "artist_name": "Electric Wave",
        "song_name": "Techno World",
        "image": "https://plus.unsplash.com/premium_photo-1682125768864-c80b650614f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww",
        "added": false
    },
    {
        "artist_name": "Mystic Sound",
        "song_name": "Dreamy Nights",
        "image": "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww",
        "added": false
    },
    {
        "artist_name": "The Classics",
        "song_name": "Timeless Tunes",
        "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
        "added": true
    }
  ];

  const [data, setData] = useState(mydata);
  const [favoriteCount, setFavoriteCount] = useState(data.filter(song => song.added).length);

  const handleToggleFavorite = (index) => {
    const updatedData = [...data];
    updatedData[index].added = !updatedData[index].added;
    setData(updatedData);
    const favoriteCount = updatedData.filter(song => song.added).length;
    setFavoriteCount(favoriteCount);
  };

  return (
    <div>
      <Navbar favoriteCount={favoriteCount} />
      <Cards data={data} handleToggleFavorite={handleToggleFavorite} />
    </div>
  );
};

export default App;
