// let weekend = ['Monday', 'Tuesday', 'Wednesday','Thusday','Friday'];

// Применили метод .map.
// Метод .map возвращает новый массив,
// каждый элемент которого формируется из значений,
// которые возвращаются из функции,
// которую мы передаем в качестве первого аргумента.
// Своими словами:
// Для каждого элемента старого массива срабатывает функция и
// создается новый массив из того, что вернула (return) функция.
// document.body.innerHTML = weekend.map(function(e) { return e.toUpperCase() });
// MONDAY,TUESDAY,WEDNESDAY,THUSDAY,FRIDAY



// Применили метод .every
// Метод .every проверяет каждый элемент массива на правило,
// которое мы задаем в первом аргументе - функции.
// Если все элементы соответствуют правилу, то возвращает true,
// иначе возвращает false
// let array = ["Some string", "Another string", "Third string",
//   "JavaScript", "Sorax"];
// console.log(array.every(function(e) { return e.length > 4 }));
// true



// Применили метод .some
// Метод .some аналогичен методу .every,
// но возвращает true если ХОТЯ БЫ ОДИН элемент
// соответствует правилу.
// Если таких элементов вообще нет, то false
// console.log(array.some(function(e) { return e.length > 10 }));
// true, т.к. есть хотя бы одна строка, имеющая длину
// больше 10-ти символов












let Product, product;

Product = function(category, name, src, price) {
  this.category = category;
  this.name = name;
  this.src = src;
  this.price = price;
  return this;
}

products = [
  new Product("Recommend","Asus ZenFone", "asus-zenfone-go", 123),
  new Product("Recommend","Apple iMac 27 Retina 5K", "apple-imac-27-retina-5k", 384),
  new Product("Bestseller","Xiaomi Mi Band 2", "xiaomi-mi-band-2", 84),
  new Product("Goods of week","LG 43UH610V", "lg-43uh610v", 310),
  new Product("New product","LG Conditioner", "lg-conditioner", 104),
  new Product("Recommend","Electrolux EZB 52410 AK", "electrolux", 360),
  new Product("Bestseller","Beats studio wireless", "beats-studio-wireles", 210),
  new Product("Recommend","Nikon D3300 Kit", "nikon-d3300", 302),
];

// Проверка вывода массива товаров
console.log(products);

// let categories = [];
// Находим все кнопки
// let btns = document.querySelectorAll(".product-header__btn");
// console.log(btns);
// // Смотрим каждую кнопку и возвращаем значение атрибутов
// let categor = btns.forEach((elem) => {
//   categories.push(elem.getAttribute("data-category"));
// });
// console.log(categories); // "popular", "trend", "new"

products.forEach((element) => {
  // Проверка вывода только категории Bestseller
  if (element.category === "Bestseller") {
    document.getElementById("products__list").innerHTML += `
      <acticle class="products-card">
        <header class="products-card__header">
          <p class="products-card__category">
            ${element.category}
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
});



