import Header from '../components/Header';

export default function Shop() {
    return (
        <>
            <div className="container">
                <div className="first-container" style={{
                    backgroundImage: 'url(/images/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '500px'
                }}>
                    <Header />
                    <h2 style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem 3rem', letterSpacing: '0.2rem', textTransform: 'uppercase' }}>Featured Collection</h2>
                </div>

                <div className="second-container0">
                    <div className="second-container">
                        <div className="title">Browse our latest styles</div>
                        <p id="description">
                            Find the perfect pieces for your living space. We offer a wide range of options from minimalist
                            modern designs to classic comfort. Elevate your home today.
                        </p>
                        <div className="shop-now">
                            <div className="shop-now-text">
                                <div className="s">V</div><div className="h">I</div><div className="o">E</div><div className="p">W</div><div className="n">A</div><div className="o2">L</div><div className="w">L</div>
                            </div>
                            <img className="shop-now-arrow" src="/images/icon-arrow.svg" alt="arrow" />
                        </div>
                    </div>
                    <div className="slide-button">
                        <img className="slide-left" src="/images/icon-angle-left.svg" alt="slide-icon" />
                        <img className="slide-right" src="/images/icon-angle-right.svg" alt="slide-icon" />
                    </div>
                </div>
            </div>

            <div className="about" style={{ padding: '4rem 2rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <img src="/images/jean-philippe-delberghe-T5BF4OyQLwU-unsplash.jpg" alt="modern-chair" style={{ width: '100%', maxWidth: '500px', height: '400px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                <img src="/images/kam-idris-_HqHX3LBN18-unsplash.jpg" alt="modern-interior" style={{ width: '100%', maxWidth: '500px', height: '400px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
        </>
    );
}
