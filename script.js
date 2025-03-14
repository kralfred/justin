
document.body.onload = createNewElements(13, "div", "colom", "cell", "gallerySpace");   // add new elements base on (numberOfElements, TYPE, ID, CLASS, targetID) targetID must be a paired tag




let target = document.getElementById("maxImage");
let cancelButton = document.getElementById("cancelButton");



// Mock data for testing
const mockConcerts = [
    { date: '2025-04-01T20:00:00Z', venue_name: 'The Roxy', city: 'Los Angeles', country: 'USA' },
    { date: '2025-04-05T19:30:00Z', venue_name: 'The Fillmore', city: 'San Francisco', country: 'USA' },
    { date: '2025-04-10T21:00:00Z', venue_name: 'O2 Academy', city: 'London', country: 'UK' }
];

async function loadConcerts() {
    const tbody = document.getElementById('concertBody');
    tbody.innerHTML = '';

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const concerts = mockConcerts;

    if (!concerts.length) {
        tbody.innerHTML = '<tr><td colspan="4">No upcoming concerts found.</td></tr>';
        return;
    }

    concerts.forEach(concert => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${new Date(concert.date).toLocaleDateString()}</td>
      <td>${concert.venue_name || 'TBD'}</td>
      <td>${concert.city || 'Unknown'}</td>
      <td>${concert.country || 'Unknown'}</td>
    `;
        tbody.appendChild(row);
    });
}

window.onload = loadConcerts;


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

