class StringBuilder {
  // Приватное свойство!
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Метод для получения текущего значения #value
  getValue() {
    return this.#value;
  }

  // Метод для добавления строки в конец
  padEnd(str) {
    this.#value += str;
  }

  // Метод для добавления строки в начало
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для добавления строки в начало и конец
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
