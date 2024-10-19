/*POPUP*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', () =>{
    closeModal();    
})


export const openModal = () => {
   const modal =  document.getElementById("modalPopUp");
   modal.style.display = "flex" ;

    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";

   }else{
        buttonDelete.style.display = "none";
   }

   if(productoActivo){
    const nombre = document.getElementById("nombre"),
    precio = document.getElementById("precio"),
    imagen = document.getElementById("img"),
    categories = document.getElementById("categoria");
    categories.value = productoActivo.categories;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    nombre.value = productoActivo.nombre;
}
};

export const closeModal = () => {
    const modal =  document.getElementById("modalPopUp");
    modal.style.display = "none" ;
    setProductoActivo(null);
    resetModal();
};
const resetModal = () => {
    const nombre = document.getElementById("nombre"),
    precio = document.getElementById("precio"),
    imagen = document.getElementById("img"),
    categories = document.getElementById("categoria");
    categories.value = "Seleccione una categoria";
    imagen.value = "";
    precio.value = 0;
    nombre.value = "";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click',() =>{
    handlebuttonDelete()
})

const handlebuttonDelete = () => {
    handleDeleteProduct(); 
}
 