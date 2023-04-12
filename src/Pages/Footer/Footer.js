import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <Link className="Link Link-hover">Branding</Link>
                <Link className="Link Link-hover">Design</Link>
                <Link className="Link Link-hover">Marketing</Link>
                <Link className="Link Link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="Link Link-hover">About us</Link>
                <Link className="Link Link-hover">Contact</Link>
                <Link className="Link Link-hover">Jobs</Link>
                <Link className="Link Link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="Link Link-hover">Terms of use</Link>
                <Link className="Link Link-hover">Privacy policy</Link>
                <Link className="Link Link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;