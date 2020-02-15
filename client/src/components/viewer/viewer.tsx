import { Component, Prop, State, h} from '@stencil/core';
import {WeiboService} from '../../services/weibo.service';

@Component({
  tag: 'weibo-viewer',
  styleUrl: 'viewer.css',
  shadow: false
})
export class WeiboViewer {
  @State() posts = []
  @State() hashtags = []
  @Prop() currentSearchTxid = ''

  componentDidLoad() {
    /*
    WeiboService.posts$.subscribe(data => {
      console.log(JSON.stringify(data))
      this.posts = [...data]
    });
    WeiboService.getAllImagePosts(hashtagTxid) */
    WeiboService.hashtags$.subscribe(data => {
      console.log(JSON.stringify(data))
      var hashes = data.filter(hashtag => !hashtag.tags["No-Results"]).map(hashtag => 
        { 
        return {
          reads: hashtag.data.reads, 
          discuss: hashtag.data.discuss, 
          query: hashtag.tags["Search-Query"],
          txid: hashtag.id
        }
      })

      this.hashtags = [...hashes]
    });
    WeiboService.getHashtags(0, 50)

    WeiboService.posts$.subscribe((postsForHashtag) => {
      this.posts = postsForHashtag;
      console.log("gots posts")
    })

    

  }
  render() {
    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Weibo Archive</ion-title>
        </ion-toolbar>
      </ion-header>,
  
      <ion-content class="ion-padding">
        <h3>Archived Weibo Tags</h3>
        <p>
           Please wait a moment while we retrieve the list of Weibo hashtags. Click on any hashtag below to view posts and images
        </p> 
      <div class="chinese-text">
      <ion-grid>
          <ion-row>
            <ion-col size="4"><b>Query</b></ion-col>
            <ion-col size="4"><b>Views</b></ion-col>
            <ion-col size="4"><b>Discussions</b></ion-col>

          </ion-row>

          {
              this.hashtags.map((tag) => {
                return (                
                  <ion-row>
                    <ion-col size="4">
                      <ion-router-link href={`weibo-viewer/${tag.txid}/posts`}>
                      {tag.query}
                      </ion-router-link>
                      </ion-col>
                    <ion-col size="4">{tag.reads}</ion-col>
                    <ion-col size="4">{tag.discuss}</ion-col>
                  </ion-row>
                
                  )
              })
          }

      </ion-grid>
      </div>
      </ion-content>     
      ]
    );
  }

}
