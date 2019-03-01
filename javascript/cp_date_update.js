function changeDate() {
    let el = document.getElementById('cp-date');
    let date = new Date().getFullYear();
    el.textContent = date;
}

changeDate();
