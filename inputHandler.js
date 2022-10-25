class InputHandler {
  #input = new Map();
  #onInputSubscribers = [];

  constructor() {
    document.addEventListener("keydown", (e) => {
      this.#input.set(e.key, true);
      this.#callSubscribers(e.key);
    });
    document.addEventListener("keyup", (e) => {
      this.#input.set(e.key, false);
      this.#callSubscribers(e.key);
    });
  }
  #callSubscribers = (key) => {
    for (const sub of this.#onInputSubscribers) {
      sub(key);
    }
  };
  onInputChange = (callback) => {
    if (typeof callback !== "function") {
      new Error("non fuction passed to callback!");
      return;
    }
    this.#onInputSubscribers.push(callback);
  };
  keyDown = (key) => this.#input.get(key);
}

export const inputHandler = new InputHandler();
