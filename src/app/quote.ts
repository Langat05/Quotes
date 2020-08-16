export class Quote {
    showDescription: boolean;
    like: number;
    quote: string;
    dislike: number;
  clickCounter: number;
  dislikeCounter: number;
    constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
        this.showDescription = false;
    }
}
