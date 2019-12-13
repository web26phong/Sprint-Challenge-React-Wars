import React, {useEffect, useState} from "react";
import axios from "axios";
import SWCard from "./SWCard";

export default function CardContainer(){
const [chars, setChars] = useState([]);

    useEffect(() =>{
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            const characters = response.data.results;
            // console.log(response.data.results);
            setChars(characters);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })
    }, []);

    return (
        <div>
            {chars.map((person,index) => {
                return <SWCard key={index} name={person.name} height={person.height} mass={person.mass} hair_color={person.hair_color} skin_color={person.skin_color} eye_color={person.eye_color} birth_year={person.birth_year} gender={person.gender} />
            })}
        </div>
    );
}