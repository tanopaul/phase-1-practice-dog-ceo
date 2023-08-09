console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDiv = document.querySelector('#dog-image-container');
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ul = document.getElementById('dog-breeds');
const dropdown = document.getElementById('breed-dropdown');

fetch(imgUrl)
.then(response => response.json())
.then(data => {
    data.message.forEach(img => {
        let el = document.createElement('img')
        el.src = img
        imgDiv.append(el)
    })
})


fetch(breedUrl)
.then(res => res.json())
.then(data => {
    let keysList = data.message;
    let keysArray = Object.keys(keysList);
    let li;

    keysArray.forEach(dog => {
        li = document.createElement('li')
        li.textContent = dog;
        ul.append(li)

        li.addEventListener('click', (e) => {
            let count = e.detail;
            if (count % 2 === 0) {
                li.style.color = 'black'
            } else {
                li.style.color = 'red'
            }
        })
    })

    dropdown.addEventListener('change', (e) => {
        
        let found = keysArray.filter(dog => {
           return dog[0] === e.target.value;
        })
        
        ul.innerHTML = '';
        found.forEach(dog => {
            let liFiltered = document.createElement('li');
            liFiltered.textContent = dog;
            return ul.append(liFiltered);
        })
        
        
    })


})


