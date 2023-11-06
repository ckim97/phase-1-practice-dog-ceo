// document.addEventListener("DOMContentLoaded", function() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//     fetch(imgUrl)
//         .then((response) => response.json())
//         .then((dogs) => {
//             let div = document.getElementById("dog-image-container");
//             dogs.message.forEach((link) => {
//                 let image = document.createElement("img");
//                 image.src = link;
//                 div.appendChild(image);
//             })
//         })
// });


// document.addEventListener("DOMContentLoaded", function(){
//     const breedUrl = "https://dog.ceo/api/breeds/list/all";
//     fetch(breedUrl)
//         .then((response) => response.json())
//         .then((breeds) => {
//             let list = document.getElementById("dog-breeds");
//             Object.keys(breeds.message).forEach((breed) => {
//                 let item = document.createElement("li");
//                 item.textContent = breed;
//                 list.appendChild(item);

//                 item.addEventListener("click", function(){
//                     item.style.color = "blue";
//                 })
//             })
//         })
// })


// document.addEventListener("DOMContentLoaded", function() {
//     const select = document.getElementById("breed-dropdown"); 
//     const list = document.getElementById("dog-breeds");
    
//     select.addEventListener("change", (event) => {
//         const result = event.target.value;
//         filterPage(result);
//     });

//     function filterPage(letter) {
//         const breeds = list.getElementsByTagName("li");
//         for (let breed of breeds) {
//             if (breed.textContent.charAt(0) === letter) {
//                 breed.style.display = "block";
//             } else {
//                 breed.style.display = "none";
//             }
//         }
//     }
// });



function main() {
    let breeds = [];
    console.log("%c HI", "color: firebrick");
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            data.message.forEach(renderImage);
        });

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let breed in data.message) {
                breeds.push(breed);
                renderBreeds(breed);
            }
        })
    let select = document.querySelector("#breed-dropdown");
    
    select.addEventListener("change", function(e){
        let result = e.target.value;
        const filteredBreeds = breeds.filter((breed) => breed[0] === result);

        let ul = document.querySelector("#dog-breeds");
        ul.innerHTML = "";
        filteredBreeds.forEach(renderBreeds);
    });
}

function renderImage(image) {
    let imageContainer = document.querySelector("#dog-image-container");
    let img = document.createElement("img");
    img.src = image;
    imageContainer.append(img);
}

function renderBreeds(breed) {
    let ul = document.querySelector("#dog-breeds");

    let li = document.createElement("li");
    li.textContent = breed;

    li.addEventListener("click", function() {
        li.style.color = "lime";
    })

    ul.append(li);
}

document.addEventListener("DOMContentLoaded", main)




