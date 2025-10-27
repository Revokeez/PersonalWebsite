import React, { useEffect, useState } from "react";

const SpotifyPlayer = () =>{
    const [player, setPlayer] = useState(null);
    const [albumImg, setAlbumImg] = useState(null);
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {

    async function getCurrentlyPlayingTrack() {

        const accessTokenRequest = await fetch(`https://localhost:3000/api/token`);
        const accessToken = await accessTokenRequest.json();
        const response = await fetch('http://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
            Authorization: 'Bearer ' + accessToken
            }
        });
        if(response.status === 400)
        {
            console.log("Bad request")
        }
        else if(response.status === 401)
        {
            console.log('Access denied')
        }
        else if (response.status === 204) 
        {
            console.log("No track currently playing");
        } 
        else 
        {
            const data = await response.json();
            console.log("Currently playing track:", data.item.name, "by", data.item.artists.map(a => a.name).join(', '));
        }
    }
        getCurrentlyPlayingTrack();
    }, []);

    if (!isReady) return <div>Loading Spotify Player...</div>

      return (
    <div>
      {/* Render your player controls here, interacting with the 'player' object */}
      <div>
        {albumImg}
      </div>
      <button onClick={() => player.togglePlay()}>Toggle Play</button>
      {/* ... more controls */}
    </div>
  );
};

export default SpotifyPlayer;