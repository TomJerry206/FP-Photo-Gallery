function upDate(previewPic){
    console.log("Hover or focus triggered");

    let preview = document.getElementById("preview");

    preview.src = previewPic.src;
    preview.alt = previewPic.alt;
}

function unDo(){
    let preview = document.getElementById("preview");

    preview.src = "";
    preview.alt = "";
}

function addTabFocus(){
    console.log("Page loaded");

    let images = document.querySelectorAll(".gallery img");

    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}
