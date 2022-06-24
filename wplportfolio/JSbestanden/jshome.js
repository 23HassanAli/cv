
const logboek = document.getElementById('logboek');
logboek.addEventListener('click', function ShowLogBoeken(){
    let dropDownContent = document.getElementsByClassName('dropDown-content')[0];
    dropDownContent.style.display = "flex"

})
const opdrachten = document.getElementById('opdracht');
opdrachten.addEventListener('click', function ShowOpdrachten(){
    let dropDownContent = document.getElementsByClassName('dropDown-content')[1];
    dropDownContent.style.display = "flex"
})
const dropDownOpdrachten = document.getElementById('opdrachtenDropDown');
dropDownOpdrachten.onmouseleave = function HideOpdrachten(){
    document.getElementById('opdrachtenDropDown').style.display = "none";
}
const dropDownContent = document.getElementById('dropDown');
dropDownContent.onmouseleave = function HideContent(){
    document.getElementById('dropDown').style.display = "none"
}
