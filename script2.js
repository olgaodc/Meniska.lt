const itemId = localStorage.getItem('id');

fetch(`https://643d6a856afd66da6af665bd.mockapi.io/items/${itemId}`).then(res => {
    return res.json();
}).then(item => {
    // console.log(data);
    const sculpture = document.querySelector('.sculpture');

    const image = document.createElement('img');
    image.setAttribute('class', 'sculpture-image');
    image.setAttribute('src', item.image);
    sculpture.append(image);

    const sculptureInfo = document.createElement('div');
    sculptureInfo.setAttribute('class', 'sculpture-info');
    sculpture.append(sculptureInfo);

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    sculptureInfo.append(wrapper);

    const titleWrapper = document.createElement('div');
    titleWrapper.setAttribute('class', 'title-wrapper')
    wrapper.append(titleWrapper);

    const name = document.createElement('span');
    name.setAttribute('class', 'sculpture-title');
    name.innerHTML = item.name;
    titleWrapper.append(name);

    const location = document.createElement('span');
    location.setAttribute('class', 'sculpture-location');
    location.innerHTML = item.location;
    titleWrapper.append(location); 

    const price = document.createElement('span');
    price.setAttribute('class', 'sculpture-price');
    price.innerHTML = `${item.price}€`;
    wrapper.append(price); 

    const description = document.createElement('p');
    description.setAttribute('class', 'sculpture-description');
    description.innerHTML = item.description;
    sculptureInfo.append(description);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'button delete');
    sculptureInfo.append(deleteButton);

    const buttonImage = document.createElement('img');
    buttonImage.setAttribute('class', 'button-image');
    buttonImage.setAttribute('src', './img/trash.png')
    deleteButton.append(buttonImage);

    const buttonText = document.createElement('span');
    buttonText.setAttribute('class', 'button-text');
    buttonText.innerHTML = `Ištrinti`;
    deleteButton.append(buttonText);


    deleteButton.addEventListener('click', () => {
        const sculptureSection = document.querySelector('.sculpture-section');

        const messageWrapper = document.createElement('div');
        messageWrapper.setAttribute('class', `message-wrapper`);
        sculptureSection.append(messageWrapper);

        const message = document.createElement('span');
        message.setAttribute('class', 'message');
        messageWrapper.append(message);
    

        fetch(`https://643d6a856afd66da6af665bd.mockapi.io/items/${itemId}`, {
            method: 'DELETE'
        }).then(res => {
            sculpture.remove();
            message.innerHTML = `Sėkmingai ištrinta`;
            console.log(res, 'Resource deleted successfully');
            
            setTimeout(() => {
                window.location.replace('./index.html')
            }, 1000);
        }).catch(error => {
            console.error('Failed to delete resource:', error);
        });
    })

})