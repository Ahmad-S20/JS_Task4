

async function getPizza(){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const result = await response.json();
    //console.log(result);

    const data = result.recipes;
    
   const posts = data.map(function(e){

    return`<div class="product" >
        <div class="product-title"><h2>${e.title}</h2></div>
        <img src="${e.image_url}" alt="${e.title}">
        </div>`;
}).join(``);
    console.log(posts);
    document.querySelector(".products .row").innerHTML = posts;
}

getPizza();