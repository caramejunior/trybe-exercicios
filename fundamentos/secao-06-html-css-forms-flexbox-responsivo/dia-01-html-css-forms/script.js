function submitBtn(event) {
    event.preventDefault();
}

window.onload = function () {
    const btn = document.querySelector('#submit-btn');
    btn.addEventListener('click', submitBtn);
};