import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Socials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/dillon-nguyen-n118/'><BsLinkedin /></a>
            <a href='https://github.com/Nockne'><BsGithub /></a>
            <a href='https://instagram.com'><BsInstagram /></a>
        </div>
    )
}

export default Socials