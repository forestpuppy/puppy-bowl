/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "../api";
import styles from "../styling/PlayerProfile.module.css";

export default function PlayerProfile({player}){
    const nav = useNavigate();

    async function remove(){
        const result = await removePlayer(player.id);
        nav("/");
    }
    return (
        <div>
            <figure>
                <img
                className={styles.img}
                src={player.imageUrl}
                alt="Puppy"
                />
            <figcaption>
                <p>Name: {player.name}</p>
                <p>Breed: {player.breed}</p>
            </figcaption>
            </figure>
            <button onClick={remove}>Remove Player</button>
        </div>
    );
}