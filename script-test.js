function renderCars() {
    console.log('renderCars wurde gestartet');

    console.table(cars);

    let productListRef = document.getElementById('productList');

    console.log('productListRef:', productListRef);

    productListRef.innerHTML = '';

    for (let i = 0; i < cars.length; i++) {
        console.log('Aktuelles Auto:', cars[i]);
        console.log('i =', i);

        productListRef.innerHTML += `
            <div class="single-car">

                <div class="car-info">

                    <h2>${cars[i].brand} ${cars[i].model}</h2>

                    <p>Baujahr: ${cars[i].year}</p>
                    <p>Preis: ${cars[i].price} €</p>
                    <p>Kraftstoff: ${cars[i].fuel}</p>

                    <p>Ausstattung:</p>

                    <ul id="car${i}">
                    </ul>

                </div>

                <img
                    class="car-image"
                    src="${cars[i].image}"
                    alt="${cars[i].brand} ${cars[i].model}"
                >

            </div>
        `;

        for (let j = 0; j < cars[i].features.length; j++) {
            console.log('Feature:', cars[i].features[j]);

            document.getElementById(`car${i}`).innerHTML += `
                <li>${cars[i].features[j]}</li>
            `;
        }
    }
}
