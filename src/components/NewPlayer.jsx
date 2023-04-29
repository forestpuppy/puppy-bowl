import React, {useState} from "react";
import { addNewPlayer } from "../api";


export default function CreateNewPlayer({ players, setPlayer}) {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [error, setError] = useState(null)

    async function submit(e){
        e.preventDefault();
        const APIData = await addNewPlayer(name,breed);
        if(APIData.success) {
            console.log('Added Player:', APIData.data.newPlayer)

            const newList = [...players, APIData.data.newPlayer]
            setPlayer(newList);

            setName('')
            setBreed('')
        } else {
            setError(APIData.error.message);
        }
    }
    return (
        <form onSubmit={submit}>
            {error && <p>{error}</p>}
            <input 
            value={name}
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            value={breed}
            type="text"
            name="name"
            placeholder="breed"
            onChange={(e) => setBreed(e.target.value)}
            />
            <button>Submit!</button>
        </form>
    )

    }

