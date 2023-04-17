const displayItems = (item) => {
    console.log(item);

    const menuList = document.querySelector('.menu-list');

    const menuItem = document.createElement('a');
    menuItem.setAttribute('class', 'menu-item');
    menuItem.href = './item.html';
    menuList.append(menuItem);

    const itemImage = document.createElement('img');
    itemImage.setAttribute('class', 'item-image');
    itemImage.setAttribute('src', item.image);
    menuItem.append(itemImage);

    const itemInfo = document.createElement('div');
    itemInfo.setAttribute('class', 'item-info');
    menuItem.append(itemInfo);

    const titleWrapper = document.createElement('div');
    itemInfo.append(titleWrapper);

    const name = document.createElement('span');
    name.setAttribute('class', 'item-title');
    name.innerHTML = item.name;
    titleWrapper.append(name);

    const description = document.createElement('p');
    description.setAttribute('class', 'item-description');
    description.innerHTML = item.description;
    titleWrapper.append(description);

    const price = document.createElement('span');
    price.setAttribute('class', 'item-price');
    price.innerHTML = `${item.price}€`;
    itemInfo.append(price);
}

fetch('https://643d6a856afd66da6af665bd.mockapi.io/items')
.then(res => {
    return res.json();
}).then(data => {
    data.sort((a, b) => {
        return Number(a.price) - Number(b.price);
    })
    
    data.forEach(item => {
        return displayItems(item);
    });
})