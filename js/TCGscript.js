var containerEl = document.getElementById('container');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;


// fetch method using "async" and "await"
var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    // console.log(card);
    renderCard(card);
}

findCard();

function renderCard(card) {
    
    for (var i = 0; i < 50; i++) {
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemonCard');
        const urlImage = card.data[i].images.small
        // console.log(urlImage);
       
        var pokeInnerHTML = `
            <div class="cardBox">
                <div class="pokeImage"><img src=${urlImage}></div>
                <button class="collected btn">Have</button>
                <button class="wishlist btn">Want</button>
            </div>    
        `;
        // console.log(pokeInnerHTML);
        pokemonEl.innerHTML = pokeInnerHTML;
        // console.log(pokemonEl);
        containerEl.appendChild(pokemonEl);
    }
}



var HaveBtnEl = $('.collected');

$(document).on('click', HaveBtnEl, function(event) {
    // event.preventDefault();

    var imgEl = $(this).siblings('src').val();
    console.log(imgEl);
    localStorage.setItem('Have', JSON.stringify(imgEl));    
})


