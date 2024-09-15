const numbers = [1, 2, 3, 4, 5];

const squareIterator = {
    data: numbers,
    index: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.index < this.data.length) {
            const value = this.data[this.index];
            this.index++;
            return { value: value * value, done: false };
        } else {
            return { done: true };
        }
    }
};


for (let square of squareIterator) {
    console.log(square);
}
