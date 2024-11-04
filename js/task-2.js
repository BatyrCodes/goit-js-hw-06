class Storage {
  // Приватное свойство (items) это для себе чтобы понять, потму что этот (This) мне очень тяжело понять!
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Метод для получения массива текущих товаров
  getItems() {
    return this.#items;
  }

  // Метод для добавления нового товара
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Метод для удаления товара
  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
