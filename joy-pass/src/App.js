import logo from './logo.svg';
import './App.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import ArtistCard from './ArtistCard.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';;

import HomePage from './Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Navigation links */}
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/artists" component={ArtistCard} />
        </Switch>
      </div>
    </Router>
  );
}


  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);



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

// page render
return (
    <div className="App">
      <header className="App-header">
        <img></img>
        <h1>JoyPass</h1>
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

export default App;
