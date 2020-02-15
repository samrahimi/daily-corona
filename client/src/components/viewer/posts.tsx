import { Component, Prop, State, h} from '@stencil/core';
import {WeiboService} from '../../services/weibo.service';

@Component({
  tag: 'weibo-posts',
  styleUrl: 'posts.css',
  shadow: false
})
export class WeiboPosts {
  @State() posts = []
  @Prop() searchTxId = ''
  @State() hashtag = ''

  componentDidLoad() {

    WeiboService.posts$.subscribe((postsForHashtag) => {
      this.posts = [...postsForHashtag];
      console.log("gots posts")
    })
    this.posts = []
    WeiboService.getPostsBySearchTxid(this.searchTxId, 0, 20)
  }
  render() {
    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Latest Posts</ion-title>
        </ion-toolbar>
      </ion-header>,
  
      <ion-content class="ion-padding">
      <div>
        {
        this.posts.map((post) => {
          return (
            <div class="post">
              <p>{post.tags["Text"]}</p>
              <img alt="Attached Image" src={"https://arweave.net/"+post.id} />
              <br />
              <a target="_blank" href={"https://viewblock.io/arweave/tx/"+post.id}>Verify On Arweave: ${post.id.substr(0, 15)}</a>

            </div>
          )
        })
      }
      </div>
      </ion-content>     
      ]
    );
  }

}
