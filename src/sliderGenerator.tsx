let j = 0;

export function* SliderGeneratorInc(arr: any[], count?: any) {
  for (let i = 0; j < arr.length; i++) {
    yield arr[j];
    j++;
    if (j === arr.length) {
      j = 0;
    }
  }
}

export function* SliderGeneratorDec(arr: any[], count?: any) {
  for (let i = j; j >= 0; i--) {
    yield arr[j];
    j--;
    if (j < 0) {
      j = arr.length - 1;
    }
  }
}


export class SliderGeneratorClass {
  [x: string]: any;
  constructor(array: any) {
    //@ts-ignore
    this.j = 0;
    this.array = array;
  }

  * prevButton() {
    for (let i = this.j; this.j >= 0; i--) {
      yield this.array[this.j];
      this.j--;
      if (this.j < 0) {
        this.j = this.array.length - 1;
      }
    }
  }

  nextButton(array?: any) {
    console.log("+1");
    // SliderGenerator(array, "next")
  }
}
