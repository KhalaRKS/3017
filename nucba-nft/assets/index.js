const productsContainer = document.querySelector('.products-container');
const productsCart = document.querySelector('.cart-container');
const total = document.querySelector('.total');
const categoriesContainer = document.querySelector('.categories');
const categoriesList = document.querySelectorAll('.category'); //NodeList || NO ES UN ARRAY []
const showMoreBtn = document.querySelector('.btn-load');
const buyBtn = document.querySelector('.btn-buy');
const cartBubble = document.querySelector('.cart-bubble');
const cartBtn = document.querySelector('.cart-label');
const menuBtn = document.querySelector('.menu-label');
const cartMenu = document.querySelector('.cart');
const barsMenu = document.querySelector('.navbar-list');
const overlay = document.querySelector('.overlay');
const successModal = document.querySelector('.add-modal'); // react-hot-toast
const deleteBtn = document.querySelector('.btn-delete');

// seteamos el carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return `
    <div class="product">
    <img src=${cardImg} alt=${name} />
    <div class="product-info">

        <div class="product-top">
            <h3>${name}</h3>
            <p>Current Bid</p>
        </div>

        <div class="product-mid">
            <div class="product-user">
                <img src=${userImg} alt="user" />
                <p>@${user}</p>
            </div>
            <span>${bid} eTH</span>
        </div>


        <div class="product-bot">
            <div class="product-offer">
                <div class="offer-time">
                    <img src="./assets/img/fire.png" alt="" />
                    <p>05:12:07</p>
                </div>
                <button class="btn-add"
                data-id='${id}'
                data-name='${name}'
                data-bid='${bid}'
                data-img='${cardImg}'>Add</button>
            </div>
        </div>
    </div>
</div>`;
};

// [{},{},{}] || ['<></>','<></>','<></>'] || '<></>''<></>''<></>''<></>''<></>'
const renderProducts = (productList) => {
  productsContainer.innerHTML += productList
    .map(createProductTemplate)
    .join('');
};
// Ver más //
/////////////////////////////////////////////

const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

// Función par arenderizar mpas productos cuando la persona pariete ver más

const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add('hidden');
  }
};

// función para mostrar u ocultar el boton de ver más

const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove('hidden');
    return;
  }
  showMoreBtn.classList.add('hidden');
};

// Lógica de los filtros

// Fucnión para cambiar el estado de los botones del filtro/categorias
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove('active');
      return;
    }
    categoryBtn.classList.add('active');
  });
};

//Función para cambiar el estado del filtro activo

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

// Función para si el elemento que se apretó es un boton de categoria y no esta activo
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains('category') &&
    !element.classList.contains('active')
  );
};

// funcion para aplicar el filtro cuando se apreta un boton de categoria
//
const applyFilter = (event) => {
  const { target } = event;
  console.log(target);
  if (!isInactiveFilterBtn(target)) return;
  productsContainer.innerHTML = '';

  changeFilterState(target)
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }

  renderProducts(appState.products[0]);
};

// Función para filtar los productos por categoría y renderizarlos

const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );
  renderProducts(filteredProducts);
};

// Menu interface

// Función para mostrar u ocultar el menu hamburguesa y el overlay

const toggleMenu = () => {
  barsMenu.classList.toggle('open-menu');
  if (cartMenu.classList.contains('open-cart')) {
    cartMenu.classList.remove('open-cart');
    return;
  }
  overlay.classList.toggle('show-overlay');
};

const toggleCart = () => {
  cartMenu.classList.toggle('open-cart');
  if (barsMenu.classList.contains('open-menu')) {
    barsMenu.classList.remove('open-menu');
    return;
  }
  overlay.classList.toggle('show-overlay');
};

// Función para cerrar el menú hamburguewsa y el overlay cuando se hace click en un link

const closeOnClick = (e) => {
  if (!e.target.classList.contains('navbar-link')) return;
  barsMenu.classList.remove('open-menu');
  overlay.classList.remove('show-overlay');
};

//Función para cerrar el menú hamburguewsa y el overlay cuando se hace scroll
const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains('open-menu') &&
    !cartMenu.classList.contains('open-cart')
  )
    return;

  barsMenu.classList.remove('open-menu');
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
};
//Función para cerrar el menú hamburguewsa y el overlay cuando se hace click en el overlay
const closeOnOverlayClick = () => {
  barsMenu.classList.remove('open-menu');
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
};

// Lógica para agregar items al carrito

// Función para crear el template de un producto en el carrito

const createCartProductTemplate = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `    
    <div class="cart-item">
      <img src=${img} alt="Nft del carrito" />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>`;
};

// Función para renderizar los productos del carrito o el mensaje "No hay productos en el carrito"

const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join('');
};

// función para obtener el total de la compra

const getCartTotal = () => {
  return cart.reduce(
    (accumulator, current) =>
      accumulator + Number(current.bid) * current.quantity,
    0
  );
};

// función para mostrar el total de la compra

const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
};

// función para actualizar la burbuja de cantidad con el numero de productos en el carrito

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

// función para habilitar o deshabilitar un boton segun corresponda

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add('disabled');
  } else {
    btn.classList.remove('disabled');
  }
};
// función para guardar el carrito en el localStorage
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// función para modificar el estado del carrito

const updateCartState = () => {
  saveCart();
  renderCart();
  showCartTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

// Función para crear un objeto con info del producto a agregar del carrito

const createProductData = ({ id, name, bid, img }) => {
  return {
    id,
    name,
    bid,
    img,
  };
};

//Función para saber si un producto ya existe en el carrito
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

// Función para agregar una unidad a un producto que ya este en el el carrito
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => cartProduct.id === product.id
    ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
    : cartProduct);
};

// Función para crear un objeto con la info del producto que se quiere agregar al carrito
const createCartPorduct = ( product) =>{
    cart = [...cart, {...product, quantity: 1}]
}

// función para mostrar el modal de éxito al agregar o añadir un producto
const showSuccessModal = (msg) => {
    successModal.classList.add("active-modal")
    successModal.textContent = msg
    setTimeout(() =>{
        successModal.classList.remove("active-modal")
    }, 1500)// 1500ms === 1,5s
}

// Función para crear un objeto con la información del producto que se agrega al carrito
const addProduct = (e) => {
  if (!e.target.classList.contains('btn-add')) return;
  const product = createProductData(e.target.dataset);
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product)
    showSuccessModal("Se agregó una unidad del producto al carrito")
  }else{
    createCartPorduct(product)
    showSuccessModal("El producto se ha agregado al carrito")
  }
  updateCartState()
};

// Función para agregar mas de cada producto del carrito

const handlePlusBtnEvent = (id) =>{
  const existingCartProduct = cart.find((item) => item.id === id)
  addUnitToProduct(existingCartProduct)
}

// Función para restar de cada producto del carrito
// Ciclo de vida <- termino/fallece la función
// EN EL FOR - break / continue
const handleMinusBtnEvent = (id) =>{
  const existingCartProduct = cart.find((item) => item.id === id)

  if(existingCartProduct.quantity === 1){
    if(window.confirm("¿Desea eliminar el producto del carrito?")){
      removeProductFromCart(existingCartProduct)
    }
    return;
  }
  subtractProductUnit(existingCartProduct)
}

// Función para remover un producto del carrito
const removeProductFromCart = (product) =>{
  cart = cart.filter((item) => item.id !== product.id)
  updateCartState()
}

// Función para restar una unidad a un producto del carrito
/*
 [{
  messi,
  4
 }]

*/
const subtractProductUnit = (product) =>{
cart = cart.map((item) => {
  return item.id === product.id ?
  { ...item, quantity: Number(item.quantity) - 1 }
  : item
});
}

// Función para manejar los eventos al apretar el botón mas o menos del item del carrito

const handleQuantity = (e) => {
  if(e.target.classList.contains("down")){
    handleMinusBtnEvent(e.target.dataset.id)
  }else if (e.target.classList.contains("up")){
    handlePlusBtnEvent(e.target.dataset.id)
  }

  updateCartState()
}

// Función para vaciar el carrito
const resetCartItems = () =>{
  cart = []
  updateCartState()
}

// Función para completar la compra o vaciar le carrito

const completeCartAction = (confirmMsg, successMsg) =>{
  if(!cart.length) return;
  if(window.confirm(confirmMsg)){
    resetCartItems()
    alert(successMsg)
  }
}

// Función para disparar un mensaje de compra existosa
const completeBuy = () =>{
  completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!")
}

// Función para disparar el mensaje de vaciado exitoso del carrito
const deleteCart = () =>{
  completeCartAction("¿Desea vaciar el carrito?", "¡No hay productos en el carrito!")
}

const init = () =>{
  renderProducts(appState.products[0])
  showMoreBtn.addEventListener("click", showMoreProducts)
  categoriesContainer.addEventListener("click", applyFilter)
  cartBtn.addEventListener("click", toggleCart)
  menuBtn.addEventListener("click", toggleMenu)
  window.addEventListener("scroll", closeOnScroll)
  barsMenu.addEventListener("click", closeOnClick)
  overlay.addEventListener("click", closeOnOverlayClick)
  document.addEventListener("DOMContentLoaded", renderCart)
  document.addEventListener("DOMContentLoaded", showCartTotal)
  productsContainer.addEventListener("click", addProduct)
  productsCart.addEventListener("click", handleQuantity)
  buyBtn.addEventListener("click", completeBuy)
  deleteBtn.addEventListener("click", deleteCart)
  disableBtn(buyBtn)
  disableBtn(deleteBtn)
  renderCartBubble(cart)
}


init()






