const searchPhone = () => {

    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;
    // console.log(searchText);
    searchFiled.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(dat => phoneSearchResult(dat.data));

}

   const  phoneSearchResult = data => {

   const searchResult = document.getElementById('search-result');
    data.forEach(brand => {
        console.log(brand);


        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `

        <div class="card">
        <img src="${brand.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${brand.phone_name}</h5>
          <p class="card-text">${brand.slug}</p>
          <button onclick="PhoneDetails(&{brand.slug})">Detalis</button>
        </div>
      </div>
        `;

        searchResult.appendChild(div);
    })

}


const PhoneDetails = slug => {
    console.log(slug);

    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch (url)
    .then(res => res.json())
    .then(data => console.log(data));

}
