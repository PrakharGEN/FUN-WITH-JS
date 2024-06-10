const canvas = document.getElementById("result");
const ctx = canvas.getContext("2d");
function loadImage(event){
    const image = document.getElementById("imgDisplayed");
    image.src =URL.createObjectURL(event.target.files[0]);
}
const preview=document.getElementById("preview");
preview.addEventListener("click",prev);
function prev(){
    const image = document.getElementById("imgDisplayed");
    const imWidth= document.getElementById("imWidth").value;
    const imHeight=document.getElementById("imHeight").value;
ctx.drawImage(image,0,0,imWidth,imHeight);

}