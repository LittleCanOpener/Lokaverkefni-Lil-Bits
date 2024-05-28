import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='bg-[#3E6053] mx-auto block'>
            <div className='text-[#e2e299]'>
                <ol className='flex flex-row flex-wrap font-large text-4xl p-4 justify-evenly '>
                    <li className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                        <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    </li>
                    <li className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                        <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                        <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                </ol>
            </div>
        </footer>

    );
}
export default Footer;