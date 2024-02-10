fetch('cabana-product.catalogue/data.json')
.then(response => response.json())
.then(products => {
    const productListContainer = document.getElementById('productList');

    // Function to render a product
    const renderProduct = (product) => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <p><strong>${product.product_name}</strong></p>
            <p>Description: ${product.product_description}</p>
            <p>Price: $${product.product_price.toFixed(2)}</p>
            <hr>
        `;
        productListContainer.appendChild(listItem);
    };

    // Function to render all products
    const renderProducts = () => {
        products.forEach(product => {
            renderProduct(product);
        });
    };

    // Call the function to render products
    renderProducts();
})
.catch(error => {
    console.error('Error fetching data:', error);
});
