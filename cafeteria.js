function mostrar (){
    document.getElementById("pedido").innerHTML="Pedido listo";
}

// Función para enviar el formulario
document.getElementById("formularioP").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    //boton para borrar
    function borrar(){
        var activo = document.activeElement.id;
        //Darle valor a una etiqueta
        activo.innerHTML=" ";
    }
    // Obtener los valores seleccionados
    const selectedProduct = document.getElementById("productoSelec").value;
    const beverage = document.getElementById("beverageInput").value;
    const selectedSize = document.getElementById("sizeSelect").value;

    // Obtener los complementos seleccionados
    const complementos = [];
    const checkboxes = document.querySelectorAll('input[name="Complementos"]:checked');
    checkboxes.forEach(function (checkbox) {
        complementos.push(checkbox.value);
    });

    // Calcular el total a pagar (se puede dar valor a los precios que tendran las bebidas)
    let total = 0; // Ajusta esto según los precios
    if (selectedProduct === "Americano") {
        total += 70;
    } else if (selectedProduct === "Capuccino") {
        total += 50;
    } else if (selectedProduct === "Latte") {
        total += 30;
    }

    // Agregar costo adicional por tamaño ($10 pesos por cada tamaño grande)
    if (selectedSize === "Grande") {
        total += 10;
    }

    // Agregar costo adicional por complementos ($5 por cada complemento)
    total += 5;

    // Mostrar los productos seleccionados y el total a pagar 
    const resultSection = document.createElement("div");
    resultSection.innerHTML = `<h3>Productos Seleccionados:</h3>
                                <p>Producto: ${selectedProduct}</p>
                                <p>Bebida: ${beverage}</p>
                                <p>Tamaño: ${selectedSize}</p>
                                <p>Complementos: ${complementos.join(", ")}</p>
                                <p>Total a Pagar: $${total}</p>`;
    
    document.body.appendChild(resultSection);
   
   
});
