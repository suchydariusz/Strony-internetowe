//---------------------   Menu open and close
const openButton = document.querySelector('.open-btn');
const closeButton = document.querySelector('.close-btn');

openButton.addEventListener('click', () => {
    document.getElementById('topNav').style.width = "100%";
}, false);
closeButton.addEventListener('click', () => {
    document.getElementById('topNav').style.width = "0%";
})
//---------------------   Menu open and close END

