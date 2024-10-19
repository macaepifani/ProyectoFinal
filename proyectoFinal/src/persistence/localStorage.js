
export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse (localStorage.getItem("products"));
    if(products){
        return products
    }else{
        return [];
    }
};
//guardar en localStorage
//recibir un producto
export const setInLocalStorage = (productIn) => {
    if(productIn){
        //traer elementos
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal) =>
        productsLocal.id == productIn.id
    )
      //verificar si elemento existe
    if(existingIndex !== -1){
        //si existe reemplazo
        productsInLocal[existingIndex] = productIn;
    }else{
        //sino agrego
        productsInLocal.push(productIn)
    }

    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    }
    
}