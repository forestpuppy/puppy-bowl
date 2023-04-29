import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../api";
import ListPlayers from "./ListPlayers";
import NewPlayer from "./NewPlayer";

export default function Players() {
    let [players, setPlayer] = useState([]);
    let [error, setError] = useState(null);
    let [search, setSearch] = useState('');

    useEffect(() => {
        async function getPlayers(){
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
            setPlayer(APIResponse.data.players);
        } else {
            setError(APIResponse.error.message);
        }
    }
    getPlayers();
},[]);

const filterPlayers = players.filter((player)=> {
    return player.name.toLowerCase().includes(search);
}); 

const playerToDisplay = search ? players : filterPlayers;

const allDisplayedPlayers = playerToDisplay.map((player) =>{
    return <ListPlayers key={player.id} player={player} />;
});

    return (
        <div>
           <div>
            <input 
            type='text'
            placeholder='search'
            onChange={(e) => setSearch(e.target.value.toLowerCase)} />
           </div>
           <NewPlayer players={players} setPlayer={setPlayer} />
           {error && <p>{error}</p>}
           {allDisplayedPlayers}
        </div>
    );
}