// export class News {
//   constructor(
//     public headline: string,
//     public post: string,
//     public id: string
//   ) {}
// }

export class News {
  headline: string;
  post: string;
  id: string;
  today = Date.now();

  constructor(headline: string, post: string, id: string) {
    this.headline = headline;
    this.post = post;
    this.id = id;
  }
}
