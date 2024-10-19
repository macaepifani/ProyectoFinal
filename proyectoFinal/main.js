import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/use/modal";
import { handleGetProductToStore } from "./src/use/store";
import "./style.css"



//Aplicacion
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

handleGetProductToStore();
renderCategories();



//header

const buttonAdd = document.getElementById("buttonAddElement");
 buttonAdd.addEventListener('click', ()=> {
     openModal();
 })


 //BUTTONSEARCH

 const buttonSearch = document.getElementById("buttonSearch");
 buttonSearch.addEventListener('click', ()=> {
handleSearchProductByName();
})


