import Header from '../components/Header';

export default function About() {
    return (
        <div className="about-page" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* Adding a dark gradient behind the header so white text is always visible */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)', zIndex: 99 }}></div>
            <Header />

            {/* Top Image acts as hero banner for navbar */}
            <img className="about-dark" src="/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg" alt="about-dark" style={{ width: '100%', height: '50vh', minHeight: '400px', objectFit: 'cover', display: 'block' }} />

            {/* Text Section */}
            <div className="about-text-container" style={{ width: '100%', maxWidth: '800px', margin: '5rem auto', textAlign: 'center', padding: '0 2rem' }}>
                <div className="about-text" style={{ width: '100%' }}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', letterSpacing: '0.2rem' }}>ABOUT OUR FURNITURE</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
            </div>

            {/* Bottom Image */}
            <div style={{ padding: '0 2rem 5rem 2rem', display: 'flex', justifyContent: 'center' }}>
                <img className="about-light" src="/images/suchit-poojari-ljRiZl00n18-unsplash.jpg" alt="about-light" style={{ width: '100%', maxWidth: '800px', height: 'auto', maxHeight: '400px', objectFit: 'contain', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
        </div>
    );
}
