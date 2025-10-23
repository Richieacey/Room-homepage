let slideRight = document.querySelector(".slide-right");
let slideRightMobile = document.querySelector(".slide-right-mobile");
let slideLeft = document.querySelector(".slide-left");
let slideLeftMobile = document.querySelector(".slide-left-mobile");
let mainImage = document.querySelector(".hero-image1");
let mainImageMobile = document.querySelector(".mobile")
let title = document.querySelector(".title");
let description = document.getElementById("description");
let hamburger = document.querySelector('.icon-hamburger');
let closeIcon = document.querySelector('.icon-close')
let logo = document.querySelector('.logo');
let leftHeader = document.querySelector('.left-header');
let header = document.querySelector('.header');
let secondContainer = document.querySelector('.second-container0');
let about = document.querySelector('.about')
let mainContainer = document.querySelector('.main-container')
let mobileImage = document.querySelector('.mobile')
let lightImage = document.querySelector('.about-light')


let imageArray = new Array()

imageArray[0] = new Image();
imageArray[0].src = "images/desktop-image-hero-1.jpg";

imageArray[1] = new Image();
imageArray[1].src = "images/desktop-image-hero-2.jpg";

imageArray[2] = new Image();
imageArray[2].src = "images/desktop-image-hero-3.jpg";

let imageArrayMobile = new Array()

imageArrayMobile[0] = new Image();
imageArrayMobile[0].src = "images/mobile-image-hero-1.jpg";

imageArrayMobile[1] = new Image();
imageArrayMobile[1].src = "images/mobile-image-hero-2.jpg";

imageArrayMobile[2] = new Image();
imageArrayMobile[2].src = "images/mobile-image-hero-3.jpg";



slideRight.addEventListener("click", () => {
    for(let i = 0; i < imageArray.length;i++) {
        if (imageArray[i].src == mainImage.src) {
            if(i === imageArray.length){
                document.querySelector(".hero-image1").src = imageArray[0].src
                break;
            }
            document.querySelector(".hero-image1").src = imageArray[i+1].src
            break;
        }
        

    }

    
    if (imageArray[1].src == mainImage.src) {
        title.innerHTML = "We are available all across the globe";
        description.innerHTML = " With stores all over the world, its easy for you to find furniture for your home or place of business.\
        Locally, we're in most major cities throughout the country. Find the branch nearest you using our\
        store locator. Any questions? Don't hesitate to contact us today.";
    }

    if (imageArray[2].src == mainImage.src) {
        title.innerHTML = "Manufactured with the best materials";
        description.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\
        to ensure that every product is made as perfect and as consistent as possible. With three decades of\
        experience in this industry, we understans what customers want for their home and office.";
        title.style.width = "85%";
    }
})
    



slideLeft.addEventListener("click", () =>{
    for (let i = imageArray.length-1;i >=0 ;i--) {
        if (imageArray[i].src == mainImage.src) {
            if (i === imageArray.length) {
                document.querySelector(".hero-image1").src = imageArray[2].src
                break;
            }
            document.querySelector(".hero-image1").src = imageArray[i-1].src
            break;
        }
    }

    if (imageArray[1].src == mainImage.src) {
        title.innerHTML = "We are available all across the globe";
        description.innerHTML = " With stores all over the world, its easy for you to find furniture for your home or place of business.\
        Locally, we're in most major cities throughout the country. Find the branch nearest you using our\
        store locator. Any questions? Don't hesitate to contact us today.";
    }

    if (imageArray[0].src == mainImage.src) {
        title.innerHTML = "Discover innovative ways to decorate"
        description.innerHTML = "We provide unmatched quality comfort, and style for property owners across the country.\
        Our experts combine form and function in bringing your vision to life. Create a room in your\
        own style with our collection and make your property a reflection of you and what you love."
    }
})


slideRightMobile.addEventListener("click", () => {
    for(let i = 0; i < imageArrayMobile.length;i++) {
        if (imageArrayMobile[i].src == mainImageMobile.src) {
            if(i === imageArrayMobile.length){
                document.querySelector(".mobile").src = imageArrayMobile[0].src
                break;
            }
            document.querySelector(".mobile").src = imageArrayMobile[i+1].src
            break;
        }
        

    }

    
    if (imageArrayMobile[1].src == mainImageMobile.src) {
        title.innerHTML = "We are available all across the globe";
        description.innerHTML = " With stores all over the world, its easy for you to find furniture for your home or place of business.\
        Locally, we're in most major cities throughout the country. Find the branch nearest you using our\
        store locator. Any questions? Don't hesitate to contact us today.";
    }

    if (imageArrayMobile[2].src == mainImageMobile.src) {
        title.innerHTML = "Manufactured with the best materials";
        description.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\
        to ensure that every product is made as perfect and as consistent as possible. With three decades of\
        experience in this industry, we understans what customers want for their home and office.";
        title.style.width = "85%";
    }
})
    



slideLeftMobile.addEventListener("click", () =>{
    for (let i = imageArrayMobile.length-1;i >=0 ;i--) {
        if (imageArrayMobile[i].src == mainImageMobile.src) {
            if (i === imageArrayMobile.length) {
                document.querySelector(".mobile").src = imageArrayMobile[2].src
                break;
            }
            document.querySelector(".mobile").src = imageArrayMobile[i-1].src
            break;
        }
    }

    if (imageArrayMobile[1].src == mainImageMobile.src) {
        title.innerHTML = "We are available all across the globe";
        description.innerHTML = " With stores all over the world, its easy for you to find furniture for your home or place of business.\
        Locally, we're in most major cities throughout the country. Find the branch nearest you using our\
        store locator. Any questions? Don't hesitate to contact us today.";
    }

    if (imageArrayMobile[0].src == mainImageMobile.src) {
        title.innerHTML = "Discover innovative ways to decorate"
        description.innerHTML = "We provide unmatched quality comfort, and style for property owners across the country.\
        Our experts combine form and function in bringing your vision to life. Create a room in your\
        own style with our collection and make your property a reflection of you and what you love."
    }
})

hamburger.addEventListener ( "click", () => {
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
    logo.style.display = 'none'
    leftHeader.style.display = 'flex'
    mainContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.45)'
    mobileImage.style.opacity = '0.45'
    lightImage.style.opacity = '0.45'
    header.style.backgroundColor = 'white'
})

closeIcon.addEventListener( "click", () =>{
    hamburger.style.display = 'block';
    closeIcon.style.display = 'none';
    logo.style.display = 'block'
    leftHeader.style.display = 'none'
    mainContainer.style.backgroundColor = 'transparent'
    mobileImage.style.opacity = '1'
    lightImage.style.opacity = '1'
    header.style.backgroundColor = 'transparent'
})
