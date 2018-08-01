let Product, product;
let typeItem;
let typeButtons = document.querySelectorAll('.product-header__btn');

let productList = document.getElementById("products__list");

Product = function(type, name, src, price, category) {
  this.type = type;
  this.name = name;
  this.src = src;
  this.price = price;
  this.category = category;
  return this;
}

function generateCards(type, itemCategory) {
  products.forEach((element) => {
    if (element.type === type) {
      if (element.category.indexOf(itemCategory) !== -1) {
        // Выводим список товаров по темплейту
        productList.innerHTML += `
          <acticle class="products-card">
            <header class="products-card__header">
              <p class="products-card__category">
                ${element.type}
              </p>
            </header>
            <a class="products-card__link" href="#">
              <img class="products-card__img" src="./img${"/pr_" + element.src + ".png"}">
              <h3 class="products-card__name">
                ${element.name}
              </h3>
            </a>
            <footer class="products-card__footer">
              <span class="products-card__price">
                ${"$ " + element.price}
              </span>
            </footer>
          </article>
        `;
      }
    };
  });
};

products = [
  new Product("Recommend","Asus ZenFone", "asus-zenfone-go", 123, "Electronics"),
  new Product("Recommend","Apple iMac 27 Retina 5K", "apple-imac-27-retina-5k", 384, "Electronics"),
  new Product("Bestseller","Xiaomi Mi Band 2", "xiaomi-mi-band-2", 84, "Electronics, Children's goods"),
  new Product("Goods of week","LG 43UH610V", "lg-43uh610v", 310, "Appleances"),
  new Product("New product","LG Conditioner", "lg-conditioner", 104, "Appleances"),
  new Product("Recommend","Electrolux EZB 52410 AK", "electrolux", 360, "Appleances"),
  new Product("Bestseller","Beats studio wireless", "beats-studio-wireles", 210, "Electronics, childrens good"),
  new Product("Recommend","Nikon D3300 Kit", "nikon-d3300", 302, "Electronics"),
];

// Срабатывает по клику на любой из элементов-кнопок
// - считывает тип нужных товаров из нажатой кнопки
// - очищает список товаров
// - выводит список нужного типа
typeButtons.forEach(function(elem) {
  elem.addEventListener('click', function() {
    // считывает тип товара
    typeItem = this.getAttribute('data-category');
    // Очищаем список товаров
    productList.innerHTML = '';
    itemCategory = document.getElementById("js-products-categories").value;
    // Вываливаем товары в список
    generateCards(typeItem, itemCategory);
  });
});

// Если категория не выбрана, то
// вываливаем весь массив продуктов на страницу
// без фильтров
function generateAllCard() {
  if(document.getElementById("js-products-categories").value === "all") {
    products.forEach((element) => {
      productList.innerHTML += `
        <acticle class="products-card">
          <header class="products-card__header">
            <p class="products-card__category">
              ${element.type}
            </p>
          </header>
          <a class="products-card__link" href="#">
            <img class="products-card__img" src="./img${"/pr_" + element.src + ".png"}">
            <h3 class="products-card__name">
              ${element.name}
            </h3>
          </a>
          <footer class="products-card__footer">
            <span class="products-card__price">
              ${"$ " + element.price}
            </span>
          </footer>
        </article>
      `;
    });
  };
};

// Функция вываливания всех продуктов на страницу
generateAllCard();
