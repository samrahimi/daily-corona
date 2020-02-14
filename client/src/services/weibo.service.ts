import  { BehaviorSubject } from 'rxjs';
import {ArweaveService} from './arweave.service';

//import this controller and use it to pull the data set 
//and generate regional timeseries that are easy to work with
//this is not your ordinary npm package
//it is a tool, and a weapon - by analyzing the data
//we can see what public health interventions are working
//which are not
//and what is making things worse
//we can also come up with new interventions based 
//on the behavior of the virus

class WeiboServiceController {

  //the raw data, sorted into buckets per region (province/state for china, city for the west, and other countries)
  //so that you can view the historical trend for a region
  //or compare trends between regions to see how the virus is spreading
  //and predict where it might go next
  //list of distinct regions

  public hashtags = []
  public hashtags$ = new BehaviorSubject<any>([])

  public posts = []
  public posts$ = new BehaviorSubject<any>([])

  //I love Stencil - it's the best of Angular, without the boilerplate...
  //Great for prototyping!
  private arweaveService: ArweaveService = ArweaveService.defaultInstance

  constructor() {
  }

  //the searchTxId contains a search type and a search value (i.e. a hashtag)
  async getAllImagePosts() {
    var customTags = {
      appName: {tag:"App-Name", value: "weibot-search-weibs"},
      version: {tag: "App-Version", value: "0.1.0"},
      collection: {tag: "Content-Type", value: "image/png"}
    }
    this.posts = await this.arweaveService.getCollection(null, customTags)
    this.posts$.next(this.posts)

  }

  async getHashtags() {
    var customTags = {
      appName: {tag:"App-Name", value: "weibot-search"},
      version: {tag: "App-Version", value: "0.1.0"},
      collection: {tag: "Search-Type", value: "hashtag"}
    }

    this.hashtags = await this.arweaveService.getCollection(null, customTags)
    this.hashtags$.next(this.hashtags)
  }
}

export const WeiboService = new WeiboServiceController();
