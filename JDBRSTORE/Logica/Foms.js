const inputName = document.getElementById('nombre');
const inputPrice = document.getElementById('precio');
const inputAmount = document.getElementById('cantidad');
const inputCategory = document.getElementById('categoria');
const inputDiscount = document.getElementById('descuento');
const inputImage = document.getElementById('imagen');
const saveButtonForms = document.getElementById('ButtomForms');

saveButtonForms.addEventListener('click', (e) => {

    e.preventDefault();
    const inputNameValue = inputName.value.trim();
    const inputPriceValue = parseFloat(inputPrice.value.trim());
    const inputAmountValue = parseInt(inputAmount.value.trim());
    const inputCategoryValue = inputCategory.value.trim();
    const inputDiscountValue = parseFloat(inputDiscount.value.trim());
    const inputImageValue = inputImage.value.trim();

    if (!inputNameValue || isNaN(inputPriceValue) || isNaN(inputAmountValue) || 
        !inputCategoryValue || isNaN(inputDiscountValue) || !inputImageValue) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    const NewProduct = {
        nombre: inputNameValue,
        precio: inputPriceValue,
        cantidad: inputAmountValue,
        categoria: inputCategoryValue,
        descuento: inputDiscountValue,
        imagen: inputImageValue
    };

    productos.push(NewProduct);

    console.log(productos);

    const baseURLAdmin = "IndexAdmin.html";
    const params = { NewProduct: JSON.stringify(NewProduct) };
    const fullURLA = `${baseURLAdmin}?${new URLSearchParams(params)}`;

    window.open(baseURLAdmin);
    alert("Producto agregado exitosamente.");

});