import React from "react";
import {CharContainer} from "./Styles";
import {Name} from "./Styles";
import {Height} from "./Styles";
import {Mass} from "./Styles";
import {HairColor} from "./Styles";
import {SkinColor} from "./Styles";
import {EyeColor} from "./Styles";
import {BirthYear} from "./Styles";
import {Gender} from "./Styles";
import {World} from "./Styles";

const SWCard = props => {
    return (
        <CharContainer>
            <Name><span>{props.name}</span></Name>
            <Height>Height: {props.height}</Height>
            <Mass>Mass: {props.mass}</Mass>
            <HairColor>Hair color: {props.hair_color}</HairColor>
            <SkinColor>Skin color: {props.skin_color}</SkinColor>
            <EyeColor>Eye color: {props.eye_color}</EyeColor>
            <BirthYear>Birth year: {props.birth_year}</BirthYear>
            <Gender>Gender: {props.gender}</Gender>
        </CharContainer>
    );
};

export default SWCard;