/* eslint-disable no-unused-vars */
const Name = '2301-FTB-ET-WEB-AM';
const baseUrl= `https://fsa-puppy-bowl.herokuapp.com/api/${Name}/`;


export async function fetchAllPlayers() {

    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result;
 }

export async function fetchSinglePlayer(id) {
    const response = await fetch(`${baseUrl}/players/${id}`);
    const result = await response.json();
    return result;
}

export async function addNewPlayer(name, breed) {
    const response = await fetch(`${baseUrl}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        breed
      })
    });
    const result = await response.json();
    return result;
}

export async function removePlayer(id) {
    const response = await fetch(`${baseUrl}/players/${id}`, {
      method: "DELETE"
    });
    const result = await response.json();
    return result;
}