import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-[#3E6053] w-full py-6">
            <div className="container mx-auto text-[#e2e299] text-center">
                <ol className="flex justify-around space-x-6 text-4xl">
                    <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                </ol>
                <p className="mt-4">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
