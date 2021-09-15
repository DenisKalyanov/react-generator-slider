export class SliderGeneratorClass {
  [x: string]: any;
  constructor(array: any, options: any) {
    this.j = options.startPosition || 0;
    this.array = array;
    this.options = options;
    this.options.slideToScroll = options.slideToScroll || 1;
  }

  *prevButton() {
    for (let i = this.j; this.j >= 0; i--) {
      yield this.array[this.j];
      this.j = this.j - this.options.slideToScroll;
      if (this.j < 0) {
        if (this.options.slideToScroll === 1) {
          this.j = this.array.length - 1;
        } else {
        }
      }
    }
  }

  *nextButton() {
    for (let i = 0; this.j < this.array.length; i++) {
      yield this.array[this.j];
      this.j = this.j + this.options.slideToScroll;
      if (this.j >= this.array.length) {
        this.j === this.array.length && this.options.slideToScroll === 1
          ? (this.j = 0)
          : (this.j = this.j - this.array.length);
      }
    }
  }
}
