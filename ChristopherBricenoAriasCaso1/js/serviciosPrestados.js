



function calcularTotal() {
    // Obtener elementos del formulario
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const totalAmountInput = document.getElementById('totalAmount');

    // Definir precios de los productos
    const prices = {
        consultaGeneral: 20,
        vacunacion: 10,
        control: 12,
        desparacitacion: 8,
        cortePelo: 25
    };

    // Obtener el producto seleccionado y la cantidad
    const selectedProduct = productSelect.value;
    const quantity = parseInt(quantityInput.value);

    // Calcular el total si la cantidad es un número válido y el producto tiene un precio definido
    if (!isNaN(quantity) && prices[selectedProduct]) {
        const price = prices[selectedProduct];
        const total = quantity * price;
        totalAmountInput.value = `$ ${total.toFixed(2)}`;
    } else {
        totalAmountInput.value = 'Error en el cálculo';
    }
}
