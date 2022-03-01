const searchMobile = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
}

const displaySearchResult = mobiles =>{
    // console.log(mobiles);
    mobiles.forEach(mobile =>{
        console.log(mobile)
    })
}