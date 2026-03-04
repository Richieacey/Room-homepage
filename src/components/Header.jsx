import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header" style={{ position: 'absolute', zIndex: 100, ...(isMenuOpen ? { backgroundColor: 'white', left: 0, top: 0, padding: '2rem', width: '100%', alignItems: 'center' } : {}) }}>
            {!isMenuOpen && (
                <img
                    src="/images/icon-hamburger.svg"
                    className="icon-hamburger"
                    alt="menu"
                    onClick={() => setIsMenuOpen(true)}
                    style={{ display: 'none' }} // we'll rely on CSS media queries for display or inline if mobile
                />
            )}

            {isMenuOpen && (
                <img
                    src="/images/icon-close.svg"
                    className="icon-close"
                    alt="close"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ display: 'block' }}
                />
            )}

            <img className="logo" src="/images/logo.svg" alt="logo" style={isMenuOpen ? { display: 'none' } : {}} />

            <div className="left-header" style={isMenuOpen ? { display: 'flex' } : {}}>
                <Link className="home" to="/" onClick={() => setIsMenuOpen(false)}>home</Link>
                <Link className="shop" to="/shop" onClick={() => setIsMenuOpen(false)}>shop</Link>
                <Link className="about-link" to="/about" onClick={() => setIsMenuOpen(false)}>about</Link>
                <Link className="contact" to="/contact" onClick={() => setIsMenuOpen(false)}>contact</Link>
            </div>
        </header>
    );
}
