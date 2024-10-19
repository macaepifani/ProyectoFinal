import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";



//funcion que se encarga de traer los lemenots y llamar al render 
export const handleGetProductToStore = () => {
    
    const products = handleGetProductLocalStorage()
    handleRenderList(products);


}
//se encarga de filtrar y renderizar la seccion con todos sus elementos


export const handleRenderList = (productsIn) =>{
    const burgers = productsIn.filter((el) => el.categories == "Hamburguesas")
    const papas = productsIn.filter((el) => el.categories == "Papas")
    const gaseosas = productsIn.filter((el) => el.categories == "Gaseosas")


    //funcion que renderiza los elementos de la seccionn 


    const renderProductGroup =  (productos, title) => {
        if(productos.length >0){
            const productosHTML = productos.map ((producto,index) => {
                return `
                    <div class='containerTargetItem' id="product-${producto.categories}-${index}">
                        <div>
                            <img src="${producto.imagen}" alt="${producto.nombre}" />
                            <div>
                                <h2>${producto.nombre}</h2>
                            </div>
                            <div class='targetProps'>
                                <p><b>Precio:</b> $ ${producto.precio}</p>
                            </div>
                        </div>
                    </div>
                `;
            })

                return `
                    <section class='sectionStore'>
                        <div class='containerTitleSection'>
                            <h3>${title}</h3>
                        </div>
                        <div class='containerProductStore'>
                        ${productosHTML.join("")}
                        </div>
                    </section>
                `;
        }else{
            return ""
        };
    };
        //renderizar cada uno de los productos dentro de su categoria

        const appContainer = document.getElementById("storeContainer");
        appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
        `;

//añade los eventos de manera dinamica

        const addEvents = (productsIn) => {
            if(productsIn){
                productsIn.forEach((element, index) => {
                    const productContainer = document.getElementById(
                        `product-${element.categories}-${index}`
                    );
                    productContainer.addEventListener('click',  () =>{
                        setProductoActivo(element);
                        openModal();
            
                    })
                });
            }
            
        }
        addEvents(burgers);
        addEvents(papas);
        addEvents(gaseosas);
}
