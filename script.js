
var contact = {
    prenom : [],
    nom: [],
    groupe: [],
    email: [],
    bio: []
}

document.getElementById("creation").addEventListener('submit',function(e){
    e.preventDefault();
    
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var groupe = document.getElementById("groupe").value;
    var email = document.getElementById("email").value;
    var bio = document.getElementById("bio").value;

    contact.prenom.push(prenom);
    contact.nom.push(nom);
    contact.groupe.push(groupe);
    contact.email.push(email);
    contact.bio.push(bio);

    for (let index = 0; index < contact.prenom.length; index++) {

        document.getElementById("contact_prenom").innerHTML = "Prénom :" + contact.prenom[index];        
    }

    for (let index = 0; index < contact.nom.length; index++) {
        document.getElementById("contact_nom").innerHTML = "Non :" + contact.nom[index];
    }

    for (let index = 0; index < contact.groupe.length; index++) {
        document.getElementById("contact_groupe").innerHTML = "Groupe : " + contact.groupe[index];
    }

    for (let index = 0; index < contact.email; index++) {

        document.getElementById("contact_email").innerHTML = "Email" + contact.email[index];        
    }

    for (let index = 0; index < contact.bio; index++) {

        document.getElementById("contact_bio").innerHTML = "Email" + contact.bio[index];        
    }

document.getElementById("details-contacts").style.display = "block";

    document.getElementById("creation").reset();
});

//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
};

