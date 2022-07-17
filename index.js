let slideRight = document.querySelector(".slide-right");
let slideLeft = document.querySelector(".slide-left");
let mainImage = document.querySelector(".hero-image1");
let title = document.querySelector(".title");
let description = document.getElementById("description");


let imageArray = new Array()

imageArray[0] = new Image();
imageArray[0].src = "images/desktop-image-hero-1.jpg";

imageArray[1] = new Image();
imageArray[1].src = "images/desktop-image-hero-2.jpg";

imageArray[2] = new Image();
imageArray[2].src = "images/desktop-image-hero-3.jpg";




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
