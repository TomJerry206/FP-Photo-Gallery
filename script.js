function upDate(previewPic){
    console.log("Hover or focus triggered");

    let preview = document.getElementById("preview");

preview.src = previewPic.src;
preview.alt = previewPic.alt;

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  
    if(previewPic.alt.includes("beach")){
        imageDiv.style.color = "#00e5ff"; // xanh biển
    }
    else if(previewPic.alt.includes("mountain")){
        imageDiv.style.color = "#4caf50"; // xanh lá
    }
    else if(previewPic.alt.includes("galaxy")){
        imageDiv.style.color = "#d8b4ff"; // tím
    }
    else if(previewPic.alt.includes("car")){
        imageDiv.style.color = "#ff5252"; // đỏ
    }
    else if(previewPic.alt.includes("motorbike")){
        imageDiv.style.color = "#ff9800"; // cam
    }
    else if(previewPic.alt.includes("truck")){
        imageDiv.style.color = "#ffd700"; // gold
    }
}

function unDo(){

    let preview = document.getElementById("preview");
    preview.src = "";
    preview.alt = "";
}


function addTabFocus(){
    console.log("Page loaded");
    let images = document.querySelectorAll("img");
    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}
