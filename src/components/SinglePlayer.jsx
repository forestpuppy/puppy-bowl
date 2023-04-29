import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../api';
import PlayerProfile from "./PlayerProfile"

export default function SinglePlayer (){
    const {id} =useParams();
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getSinglePlayer(){
            const APIResponce = await fetchSinglePlayer(id);
            if (APIResponce.success) {
                setPlayer(APIResponce.data.player);
            } else {
                setError(APIResponce.error.message);
            }
        }
        getSinglePlayer();
    }, )
    if(error) return <p>{error}</p>
    else if(player) return <PlayerProfile player={player} />
    else return 'loading...'
}