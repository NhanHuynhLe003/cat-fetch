
let api = 'https://api.thecatapi.com/v1/breeds';
fetch(api)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let boxContainer = document.getElementsByClassName('box');
        for(let i=0; i<data.length; i++){
        let imageAnimal = document.createElement('img');
        let nameCat = document.createElement('h1');
        let boxCat = document.createElement('div');
        boxCat.style.width = '25%';
        nameCat.innerText = data[i].name;
        imageAnimal.src = `${data[i].image.url}`;
        imageAnimal.style.width = '300px'
        boxCat.appendChild(imageAnimal);
        boxCat.appendChild(nameCat);
        boxContainer[0].appendChild(boxCat);
        }
    })