import logo from './logo.svg';
import './App.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import ArtistCard from './ArtistCard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useEffect } from 'react';
import { useState } from 'react';


import axios from 'axios';


function App() {
  const CLIENT_ID = "96973c1e9d4b4f77b48f7749e6a2cf7d"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) { 
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      console.log(token);

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  }, [])

const logout = () => { 
  setToken("");
  window.localStorage.removeItem("token");
}

const searchArtists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: "artist"
    }
  })
  setArtists(data.artists.items)
}

const loginToSpotify = () => {
  // Construct the Spotify login URL
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  // Redirect the user to the Spotify login page
  window.location.href = AUTH_URL;
};

const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}

const fetchTopArtists = async (accessToken) => {
  const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    params: {
      time_range: 'medium_term', // Adjust time_range as needed
      limit: 3, // Get the top 3 artists
    },
  });
  return response.data.items;
};

return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? 
          <AwesomeButton type="primary" onPress={loginToSpotify}>Connect Spotify!</AwesomeButton>
          : <button onClick={logout}>Logout</button>} 
        {token ?
            <form onSubmit={searchArtists}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <AwesomeButton size={"small"} type={"submit"}>Search</AwesomeButton>
            </form>

            : <h2>Please login</h2>
        }
        {renderArtists()}

      </header>
    </div>
  );
}

export default App;
