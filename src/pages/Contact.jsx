import Header from '../components/Header';

export default function Contact() {
    return (
        <div className="contact-page" style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 2rem',
            position: 'relative',
            backgroundColor: 'hsl(0, 0%, 27%)', // Dark background to make Header visible
            backgroundImage: 'url(/images/desktop-image-hero-3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
        }}>
            <Header />
            <div className="contact-form-container" style={{ width: '100%', maxWidth: '600px', backgroundColor: '#fff', padding: '3rem', BoxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Get In Touch</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'hsl(0, 0%, 63%)' }}>Name</label>
                        <input type="text" id="name" style={{ width: '100%', padding: '1rem', border: '1px solid #ccc', fontSize: '1rem' }} placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'hsl(0, 0%, 63%)' }}>Email</label>
                        <input type="email" id="email" style={{ width: '100%', padding: '1rem', border: '1px solid #ccc', fontSize: '1rem' }} placeholder="Your Email" />
                    </div>
                    <div>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'hsl(0, 0%, 63%)' }}>Message</label>
                        <textarea id="message" rows="5" style={{ width: '100%', padding: '1rem', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }} placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="button" style={{ backgroundColor: 'black', color: 'white', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', letterSpacing: '0.2rem', marginTop: '1rem' }}>
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
}
