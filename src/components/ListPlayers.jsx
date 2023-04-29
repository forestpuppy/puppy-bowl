import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListPLayers({player}){
    let nav = useNavigate();
    return (
        <div>
            <h1>{player.name}</h1>
            <button onClick={() => {
                nav(`/${player.id}`);
            }}>
                Expand
            </button>
        </div>
    );
}