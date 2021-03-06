export class Quote {
  showDescription: boolean;
  like: number;
  quote: string;
  dislike: number;
  constructor(public id: number, public name: string, public description: string, public clickCounter: number, public dislikeCounter: number,
    public completeDate: Date) {
    this.showDescription = false;
  }
}