import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`header ${isMenuOpen ? 'mobile-menu-active' : ''}`} style={{ position: 'absolute', zIndex: 100 }}>
            {/* The hamburger or close icon */}
            <img
                src={isMenuOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
                className={isMenuOpen ? "icon-close" : "icon-hamburger"}
                alt={isMenuOpen ? "close menu" : "open menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={isMenuOpen ? { display: 'block', marginRight: '2rem' } : {}}
            />

            {/* Logo is hidden when menu is open */}
            {!isMenuOpen && <img className="logo" src="/images/logo.svg" alt="logo" />}

            {/* Navigation Links */}
            <div className={`left-header ${isMenuOpen ? 'open' : ''}`} style={isMenuOpen ? { display: 'flex', position: 'relative', top: 0, padding: 0, boxShadow: 'none' } : {}}>
                <Link className="home" to="/" onClick={() => setIsMenuOpen(false)}>home</Link>
                <Link className="shop" to="/shop" onClick={() => setIsMenuOpen(false)}>shop</Link>
                <Link className="about-link" to="/about" onClick={() => setIsMenuOpen(false)}>about</Link>
                <Link className="contact" to="/contact" onClick={() => setIsMenuOpen(false)}>contact</Link>
            </div>
        </header>
    );
}
