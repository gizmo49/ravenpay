import React from 'react';
import CryptoJS from "crypto-js";
import SVG from 'react-inlinesvg';
import { imageLinks } from 'assets/images';
import "./ProfileToggle.scss";


const ProfileToggle = ({ email = "chikacheezy@gmail.com" }) => {
    const hashedEmail = CryptoJS.SHA256(email);
    
    return (
        <div className='profile__toggle'>
            <img src={`https://www.gravatar.com/avatar/${hashedEmail}`} alt="user" />
            <span>Olakunle Te...</span>
            <SVG 
                src={imageLinks?.icons?.caretRight}
            />
        </div>
    );
};

export default ProfileToggle;