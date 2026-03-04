import { useState } from 'react';
import Header from '../components/Header';

const slideData = [
    {
        desktopImg: "/images/desktop-image-hero-1.jpg",
        mobileImg: "/images/mobile-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        desktopImg: "/images/desktop-image-hero-2.jpg",
        mobileImg: "/images/mobile-image-hero-2.jpg",
        title: "We are available all across the globe",
        desc: "With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        desktopImg: "/images/desktop-image-hero-3.jpg",
        mobileImg: "/images/mobile-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understans what customers want for their home and office.",
        titleStyle: { width: "85%" }
    }
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
    };

    const currentData = slideData[currentSlide];

    return (
        <>
            <div className="container">
                <div className="first-container">
                    <Header />
                    <img className="hero-image1" src={currentData.desktopImg} alt="hero-image" />
                    <img className="mobile" src={currentData.mobileImg} alt="hero-image-mobile" />
                    <div className="slide-button-mobile">
                        <img className="slide-left-mobile" src="/images/icon-angle-left.svg" alt="slider-icon" onClick={prevSlide} />
                        <img className="slide-right-mobile" src="/images/icon-angle-right.svg" alt="slider-icon" onClick={nextSlide} />
                    </div>
                </div>

                <div className="second-container0">
                    <div className="second-container">
                        <div className="title" style={currentData.titleStyle || {}}>{currentData.title}</div>
                        <p id="description">{currentData.desc}</p>
                        <div className="shop-now" onClick={() => window.location.href = '/shop'}>
                            <div className="shop-now-text">
                                <div className="s">S</div><div className="h">H</div><div className="o">O</div><div className="p">P</div><div className="n">N</div><div className="o2">O</div><div className="w">W</div>
                            </div>
                            <img className="shop-now-arrow" src="/images/icon-arrow.svg" alt="arrow" />
                        </div>
                    </div>
                    <div className="slide-button">
                        <img className="slide-left" src="/images/icon-angle-left.svg" alt="slide-icon" onClick={prevSlide} />
                        <img className="slide-right" src="/images/icon-angle-right.svg" alt="slide-icon" onClick={nextSlide} />
                    </div>
                </div>
            </div>

            <div className="about">
                <img className="about-dark" src="/images/image-about-dark.jpg" alt="about-dark" />
                <div className="about-text-container">
                    <div className="about-text">
                        <h3>ABOUT OUR FURNITURE</h3>
                        <p>
                            Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                            or anything in between. Product specialists are available to help you create your dream space.
                        </p>
                    </div>
                </div>
                <img className="about-light" src="/images/image-about-light.jpg" alt="about-light" />
            </div>
        </>
    );
}
