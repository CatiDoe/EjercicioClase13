var arrProducts = [];

function addProduct(){
    var name = document.getElementById("pname").value;
    var price = document.getElementById("pprice").value;
    var category = document.getElementById("sproduct").value;
    var image = document.getElementById("pdocument").files[0].name;

    var objProduct = new Object();
    objProduct.name = name;
    objProduct.price = price;
    objProduct.category = category;
    objProduct.image = image;

    arrProducts.push(objProduct);

    console.log(arrProducts);
}