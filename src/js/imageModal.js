const btnImageBack = document.getElementById("btnImageBack");
const btnImageNext = document.getElementById("btnImageNext");
//const shownImage = document.getElementById("image");
const shownImage = document.querySelector("div#image img");

let i = 0;

//First render, and adds eventListeners
export default function imageModal(imgs) {
    updateImg(imgs[i])

    btnImageNext.addEventListener("click", () => indexAdd(imgs));
    btnImageBack.addEventListener("click", () => indexSub(imgs))

    //Wait for image to load, then add class describing if image is wide or tall
    shownImage.onload = () => {
        shownImage.setAttribute("class", shownImage.width >= shownImage.height ? "wide" : "tall");
    }
};

//Updates the image shown
function updateImg(img) {
    shownImage.src = img.path;
    shownImage.setAttribute("alt", img.desc);    
}

//Increases the index
function indexAdd(imgs) {
    if (i === imgs.length-1) {
        i = 0;
    } else {
        i++;
    }

    updateImg(imgs[i]);
}

//Decreases the index
function indexSub(imgs) {
    if (i === 0) {
        i = imgs.length-1;
    } else {
        i--;
    }

    updateImg(imgs[i]);
}