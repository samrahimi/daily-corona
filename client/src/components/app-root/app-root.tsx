import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="daily-snapshot" />
          <ion-route url="/latest" component="daily-snapshot" />

          <ion-route url="/time-series/region/:region" component="time-series" />
          <ion-route url="/time-series/country/:country" component="time-series" />
          <ion-route url="/time-series/global/:name" component="time-series" />

          <ion-route url="/data/about" component="about-data" />
          <ion-route url="/data/download" component="download-data" />

          <ion-route url="/profile/:name" component="app-profile" />

        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
