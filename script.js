function upDate(previewPic){
    console.log("Hover or focus triggered");

    let preview = document.getElementById("preview");
    let caption = document.getElementById("caption");
    
    preview.src = previewPic.src;
    preview.alt = previewPic.alt;
    
    caption.innerText = previewPic.alt;
}

function unDo(){
    let preview = document.getElementById("preview");
    let caption = document.getElementById("caption");
    preview.src = "";
    preview.alt = "";
    caption.innerText = "Hover over an image below";
}

function addTabFocus(){
    console.log("Page loaded");

    let images = document.querySelectorAll(".gallery img");

    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}
