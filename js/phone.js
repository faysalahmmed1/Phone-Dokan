const searchPhone = () => {

    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;

     //clear previous text
     searchFiled.value = '';

     // alert from 
    if(searchText == ''){
        alert("pleace write something to Display !!");
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
    .then(res => res.json())
    .then(dat => phoneSearchResult(dat.data));

    }

    //clear previous text
    searchFiled.value = '';
 
}

   const  phoneSearchResult = data => {

   const searchResult = document.getElementById('search-result');

    //    clear previous data
   searchResult.textContent='';


    //    Alert Form Data
   if (data.length == 0){
    alert("show no Result Found this try again!!!");

   }

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
          <button onclick="PhoneDetails(${brand.slug})">Detalis</button>
        </div>
      </div> 
        `;

        searchResult.appendChild(div);
    })

}


const PhoneDetails = slug => {
    
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch (url)
    .then(res => res.json())
    .then(data => phoneAbout(data));

}
// const  phoneAbout = Iphone => {
//     console.log(Iphone);

//     const IphoneAboutDetalis = document.getElementById('iphone-about-detalis');
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div innerHTML = `
//     <div class="card" style="width: 18rem;">
//     <img src="${brand.Apple.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//     <h2 class="card-title">${data.name}</h2>
//       <h2 class="card-title">${data.mainFeatures}</h2>
//       <h2 class="card-title">${data.displaySize}</h2>
//       <h2 class="card-title">${data.chipSet}</h2>
//       <h2 class="card-title">${data.memory}</h2>
//       <h2 class="card-title">${data.sensors.}</h2>
//       <h2 class="card-title">${data.slug}</h2>
//       <h2 class="card-title">${data.others}</h2>
      
//     </div>
//   </div>
//     `;
//     IphoneAboutDetalis.appendChild(div);

// }
