const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navbar-list');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navigationMenu.classList.toggle('active');

});

document.querySelectorAll('.navbar-item').forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navigationMenu.classList.remove('active');
}));



const submitButton = document.querySelector('.button.submit');

const postSculpture = (newSculpture) => {
    fetch('https://643d6a856afd66da6af665bd.mockapi.io/items', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSculpture),
    })
        .then((data) => {
            return data.json();
        }).then((data) => {
            const formMessage = document.querySelector('.form-message');
            formMessage.innerHTML = 'Sėkmingai įkėlta';

            setTimeout(() => {
                window.location.replace('./index.html')
            }, 1000);
        });
};


submitButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    

    const newSculpture = {
        name: name,
        price: price,
        image: image,
        description: description,
        location: location,         
    }
    postSculpture(newSculpture);
})