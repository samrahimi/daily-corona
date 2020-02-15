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

  private hashtagtxids = []
  private postTxids = []

  public posts = []
  public posts$ = new BehaviorSubject<any>([])

  //I love Stencil - it's the best of Angular, without the boilerplate...
  //Great for prototyping!
  private arweaveService: ArweaveService = ArweaveService.defaultInstance

  constructor() {
  }

  //searchtxid is the id of, for example, a hashtag in the hashtags[] array
  async getPostsBySearchTxid(txid, offset, limit) {
    var customTags = [
      {name:"App-Name", value: "weibot-search-weibs"},
      {name: "App-Version", value: "0.1.0"},
      {name: "Search-Tx", value: txid}
    ]
    this.postTxids = await this.arweaveService.getTransactionsByTags(customTags)

    var txToRetrieve = this.postTxids.slice(offset, limit)
    this.hashtags = []
    for (var i =0; i< txToRetrieve.length; i++) {
      var tx = await this.arweaveService.getItemByTxId(txToRetrieve[i])
      this.posts.push(tx)
    }
    this.posts$.next(this.posts)
  }

  async getHashtags(offset, limit) {
      var searchTags = [
        {name:"App-Name", value: "weibot-search"},
        {name: "App-Version", value: "0.1.0"},
        {name: "Search-Type", value: "hashtag"}
      ]
      this.hashtagtxids = await this.arweaveService.getTransactionsByTags(searchTags)

      var txToRetrieve = this.hashtagtxids.slice(offset, limit)
      this.hashtags = []
      for (var i =0; i< txToRetrieve.length; i++) {
        var tx = await this.arweaveService.getItemByTxId(txToRetrieve[i])
        this.hashtags.push(tx)
      }
      this.hashtags$.next(this.hashtags)
  }
}

export const WeiboService = new WeiboServiceController();
