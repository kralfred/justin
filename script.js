
document.body.onload = createNewElements(13, "div", "colom", "cell", "gallerySpace");   // add new elements base on (numberOfElements, TYPE, ID, CLASS, targetID) targetID must be a paired tag



let target = document.getElementById("maxImage");
let cancelButton = document.getElementById("cancelButton");

const links = document.querySelectorAll('.venue-link');




function createNewElements(numberOfElements, TYPE, ID, CLASS, targetID){
for(let i = 1; i < numberOfElements; i++){

const newElement = document.createElement(TYPE);

const innerPicture = document.createElement("img");

const currentId = ID + i;

newElement.setAttribute("id", currentId);
newElement.setAttribute("class", CLASS);


innerPicture.setAttribute("class", "galleryPic");
innerPicture.setAttribute("src", "images/gallery/" + i + ".jpg");
innerPicture.setAttribute("alt", "pic" + i);
innerPicture.setAttribute("id", i);

innerPicture.addEventListener("click", maximizeImg);



document.getElementById(targetID).appendChild(newElement);
document.getElementById(currentId).appendChild(innerPicture);

}
}

function maximizeImg(){

    target.style.display = "block";
    clickSound.play();
    cancelButton.style.display = "block";
     let currentId = this.id;

     
     const maxPic = document.createElement("img");

     maxPic.setAttribute("src", "images/gallery/" + currentId + ".jpg")       //set atributes to maxPic
     maxPic.setAttribute("alt", "maxImg")
     maxPic.setAttribute("class", "copy");
     maxPic.setAttribute("id", "copy")

     target.appendChild(maxPic);
     target.appendChild(cancelButton);


  

    cancelButton.addEventListener("click", minimizeImg);
    maxPic.addEventListener("click", minimizeImg);
    

}
function minimizeImg(){
    

         target.style.display = "none";
         cancelButton.style.display = "none";
         document.getElementById("copy").remove();
    }

