function upDate(picturePrev) {
    x = document.getElementById("image");
    x.style.background="url("+picturePrev.src+")";
    x.innerHTML = picturePrev.alt;
}

function unDo () {
    x = document.getElementById("image");
    x.style.background='#8e68ff';
    x.innerHTML = '<b>Hover over an image below to display here.</b>';
} 

function addTabFocus() {
    let images = 
        document.querySelectorAll(".preview");
            for (let i = 0; i < images.length; 
                 i++) {
                images[i].setAttribute("tabindex", 
                                       "0");
            }
            console.log("Tab index added to    images.");
}

window.onload = function () {
    addTabFocus();
};//This was made by Xyrelle Martinez