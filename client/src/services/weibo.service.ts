import  { BehaviorSubject } from 'rxjs';
import {ArweaveService} from './arweave.service';


class WeiboServiceController {


  public hashtags = []
  public hashtags$ = new BehaviorSubject<any>([])

  private hashtagtxids = []
  private postTxids = []

  public posts = []
  public posts$ = new BehaviorSubject<any>([])

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
      var tx = await this.arweaveService.getItemRaw(txToRetrieve[i])
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
