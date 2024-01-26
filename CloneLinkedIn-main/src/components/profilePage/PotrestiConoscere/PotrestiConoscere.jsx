import PersonaSingola from "../PersonaSingola/PersonaSingola";
import './PotrestiConoscere.css'
import { useState, useEffect } from "react";


const PotrestiConoscere = () => {
    const [moreUsers, setMoreUsers] = useState([])


    const fetchMoreUsers = async () => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
            if (res.ok) {
                const data = await res.json()
                const randomIndexes = [];
                while (randomIndexes.length < 5) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    if (!randomIndexes.includes(randomIndex)) {
                        randomIndexes.push(randomIndex);
                    }
                }
                const randomUsers = randomIndexes.map(index => data[index]);
                setMoreUsers(randomUsers);
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    useEffect(() => {
        fetchMoreUsers()
    },[])

    return(
        <div className="potrestiConoscere">
            <h2>Persone che potresti conoscere</h2>
            {moreUsers && moreUsers.length > 0 ? (
                moreUsers.map((user) => {
                    return <PersonaSingola key={user._id} userData={user} />
                })
            ) : ''}
            <h2 className="second">Mostra tutto</h2>
        </div>
    )
}

export default PotrestiConoscere