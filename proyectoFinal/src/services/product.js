//guardar o modificar elemento
import Swal from 'sweetalert2'
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../use/modal";
import { handleGetProductToStore, handleRenderList } from "../use/store";

 //==========Productos



 const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
})
//funcion guardar

 const handleSaveOrModifyElements =  () => {
    const nombre = document.getElementById("nombre").value,
    precio = document.getElementById("precio").value,
    imagen = document.getElementById("img").value,
    categories = document.getElementById("categoria").value;
let object = null;

    if(productoActivo){
        object = {
            ...productoActivo, 
            nombre,
            imagen, 
            precio,
            categories,
        }

    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen, 
            precio,
            categories,
        }

    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });
    
    setInLocalStorage(object);

    handleGetProductToStore();

    closeModal();
}


//eliminar prod

export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Desea eliminar elemento?",
        text: "Si lo elimina será permanente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=> el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
      });



}
