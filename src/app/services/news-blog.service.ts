import { Injectable } from '@angular/core';
import { News } from '../models/news.model';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class NewsBlogService {
  news = [
    new News(
      'New break through in CRISPR Technology',
      'For the first time, scientists have used CRISPR technology to insert genes that allow immune cells to focus their attack on cancer cells, potentially leaving normal cells unharmed and increasing the effectiveness of immunotherapy. The new approach is being presented today at the Society for Immunotherapy of Cancer (SITC) 2022 and is being published in the journal Nature. It is co-led by Antoni Ribas, MD, PhD, of UCLA Jonsson Comprehensive Cancer Center and professor of medicine at UCLA.',
      uuid()
    ),
    new News(
      'Mercedes lock faster acceleration behind paywall',
      "It seems like the subscription model — something we're far more used to when it comes to software, as opposed to hardware — is becoming more and more popular in the automotive space in recent years. Adding an extra feature like heated seats, or improving the performance of your vehicle, meant configuring it as such at the dealership or going to a service center after the fact. Nowadays, things are done differently.",

      uuid()
    ),
    new News(
      'Brussels fears the I.R.A. gives American companies an unfair advantage.',
      'Brussels fears the I.R.A. gives American companies an unfair advantage. Last week, President Emmanuel Macron of France warned President Biden that any trade imbalance caused by the climate law, along with the CHIPS Act that is meant to bolster American semiconductor manufacturing, could drive a wedge between the allies. On Sunday, Ursula von der Leyen, the president of the E.U.’s executive arm, said that Europe could retaliate with subsidies of its own to avoid losing manufacturing business to the United States. (The Swedish electric vehicle battery maker Northvolt, for example, said it would use an I.R.A. subsidy to relocate some production to the U.S',
      uuid()
    ),
    new News(
      'Amazon has become the first company to ever lose $1 trillion dollar',
      "After recently losing its membership in the exclusive club of companies with a market cap of $1 trillion or more, Amazon has become the world's first publicly traded company to shed $1 trillion in market value, Bloomberg reports.",
      uuid()
    ),
  ];

  constructor() {}

  private newsBlogs = new BehaviorSubject<News[]>(this.news);
  currentNewsBlogs = this.newsBlogs.asObservable();

  AddBlog(headline: string, post: string) {
    let newBlog: News = new News(headline, post, uuid());
    this.news.unshift(newBlog);
    this.newsBlogs.next(this.news);
  }

  DeleteBlog(id: string) {
    // You can't delete an item from the Observable,
    //you have to emit a new value without the deleted item.
    this.news = this.news.filter((n) => n.id != id);
    this.newsBlogs.next(this.news);
  }
}
