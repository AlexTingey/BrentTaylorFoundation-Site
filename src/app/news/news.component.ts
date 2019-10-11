import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  linksOnPassing = [new Link('Stars and Stripes', 'https://www.stripes.com/news/us/utah-guardsman-father-of-seven-killed-in-insider-attack-remembered-as-giant-among-men-1.555150'), new Link('Time Magazine', 'https://time.com/5444889/utah-mayor-brent-taylor-killed-afghanistan/'), new Link('The New York Times', 'https://www.nytimes.com/2018/11/04/us/utah-mayor-killed-afghanistan-brent-taylor.html'), new Link('USA Today', 'https://www.usatoday.com/story/news/nation/2018/11/04/utah-mayor-brent-taylor-killed-afghanistan-insider-attack/1883961002/'), new Link('The Ogden (Utah) Standard Examiner', 'https://www.standard.net/news/local/brent-taylor-who-served-as-north-ogden-mayor-killed-in/article_c0f9ef7c-93d7-52b4-8c61-71b31558981d.html')];
  linksOnDover = [new Link('Fox News', 'https://www.foxnews.com/opinion/widow-of-utah-mayor-killed-this-week-in-afghanistan-reminds-americans-of-their-precious-right-to-vote'), new Link('Salt Lake Tribune','https://www.sltrib.com/news/2018/11/06/remains-utahs-brent/'), new Link('KSL News','https://www.ksl.com/article/46421555/remains-of-maj-brent-taylor-arrive-back-in-us'), new Link('Major Taylor\'s Widow Addresses the Media near Dover Air Base', 'https://www.foxnews.com/us/body-of-major-brent-taylor-utah-mayor-killed-in-afghanistan-is-returned-to-us-soil')];
  linksOnVigil = [new Link('Houston Style Magazine', 'http://stylemagazine.com/news/2018/nov/12/community-honors-maj-brent-taylor-vigil-large-amer/'), new Link('Deseret News','https://www.deseret.com/2018/11/11/20658609/flag-vigil-honor-maj-brent-taylor-a-true-patriot-and-good-man'), new Link('KUTV News','https://kutv.com/news/local/remembrance-vigil-planned-for-fallen-north-ogden-mayor-major-brent-taylor')];
  linksOnFuneral = [new Link('Fox 13 News', 'https://fox13now.com/2018/11/17/maj-brent-taylor-laid-to-rest-in-north-ogden-surrounded-by-family-members/'), new Link('Salt Lake Tribune','https://www.sltrib.com/news/2018/11/17/live-funeral-national')]
  jennieLinks = [new Link('Fox 13 Bob Evans "Three Questions" Interview', 'https://www.youtube.com/watch?v=Qih1hnTLBwk'), new Link('CNN New Day "Our Hearts are broken but our hearts are full"', 'https://www.youtube.com/watch?v=-xaeNGpQ4oM '), new Link('Anasazi Foundation "Service, Family and the Faith to Move Forward"', 'https://www.youtube.com/watch?v=CPisiPDSWK8'), new Link('The Today Show "Wife of Major Brent Taylor Speaks out after Husband\'s Death"', 'https://www.today.com/video/wife-of-utah-mayor-maj-brent-taylor-speaks-out-after-husband-s-death-1404042307604'), new Link('Utah League of Cities and Towns 2019 Brent & Jennie Taylor Service Award', 'https://www.youtube.com/watch?v=Mlf23yyBz7A')];
  constructor() { }

  ngOnInit() {
  }

}
