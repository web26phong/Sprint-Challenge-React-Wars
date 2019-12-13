import React from "react";
import {CharContainer} from "./Styles";
import {Name} from "./Styles";
import {CharStatContainer} from "./Styles";
import {Height} from "./Styles";
import {Mass} from "./Styles";
import {HairColor} from "./Styles";
import {SkinColor} from "./Styles";
import {EyeColor} from "./Styles";
import {BirthYear} from "./Styles";
import {Gender} from "./Styles";

const SWCard = props => {
    return (
        <CharContainer>
            <Name><span>{props.name}</span></Name>
            <CharStatContainer>
                <Height>HEIGHT: {props.height}</Height>
                <Mass>MASS: {props.mass}</Mass>
                <HairColor>HAIR COLOR: {props.hair_color}</HairColor>
                <SkinColor>SKIN COLOR: {props.skin_color}</SkinColor>
                <EyeColor>EYE COLOR: {props.eye_color}</EyeColor>
                <BirthYear>BIRTH YEAR: {props.birth_year}</BirthYear>
                <Gender>GENDER: {props.gender}</Gender>
            </CharStatContainer>
        </CharContainer>
    );
};

export default SWCard;