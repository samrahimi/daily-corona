import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
            <ion-menu content-id="content" side="start">
      <ion-header>
        <ion-toolbar>
          <ion-title>Resources</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon name="analytics" slot="start"></ion-icon>
            <ion-label>Epidemic Statistics</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="megaphone" slot="start"></ion-icon>
            <ion-router-link href={"/twitter-feed/"}>

            <ion-label>Social Feed (From Twitter)</ion-label>
            </ion-router-link>
          </ion-item>
          <ion-item>
              <ion-icon name="albums" slot="start"></ion-icon>
              <ion-router-link href={"/weibo-viewer/"}>

              <ion-label>Weibo Archive</ion-label>
            </ion-router-link>
          </ion-item>
          <ion-item>
            <ion-icon name="add-circle" slot="start"></ion-icon>
            <ion-label>Add Content</ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="settings" slot="start"></ion-icon>
            <ion-label>Settings</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>


        <ion-router useHash={false}>
          <ion-route url="/" component="daily-snapshot" />
          <ion-route url="/latest" component="daily-snapshot" />

          <ion-route url="/time-series/region/:region" component="time-series" />
          <ion-route url="/time-series/country/:country" component="time-series" />
          <ion-route url="/time-series/global/:name" component="time-series" />

          <ion-route url="/weibo-viewer" component="weibo-viewer" />
          <ion-route url="/twitter-feed" component="social-feed"></ion-route>
          <ion-route url="/data/about" component="about-data" />
          <ion-route url="/data/download" component="download-data" />

          <ion-route url="/profile/:name" component="app-profile" />

        </ion-router>
        <ion-nav id="content" />
      </ion-app>
    );
  }
}
