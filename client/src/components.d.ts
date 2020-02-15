/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AboutData {}
  interface AppRoot {}
  interface DailySnapshot {}
  interface TimeSeries {
    'region': string;
  }
  interface WeiboPosts {
    'searchTxId': string;
  }
  interface WeiboViewer {
    'currentSearchTxid': string;
  }
}

declare global {


  interface HTMLAboutDataElement extends Components.AboutData, HTMLStencilElement {}
  var HTMLAboutDataElement: {
    prototype: HTMLAboutDataElement;
    new (): HTMLAboutDataElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLDailySnapshotElement extends Components.DailySnapshot, HTMLStencilElement {}
  var HTMLDailySnapshotElement: {
    prototype: HTMLDailySnapshotElement;
    new (): HTMLDailySnapshotElement;
  };

  interface HTMLTimeSeriesElement extends Components.TimeSeries, HTMLStencilElement {}
  var HTMLTimeSeriesElement: {
    prototype: HTMLTimeSeriesElement;
    new (): HTMLTimeSeriesElement;
  };

  interface HTMLWeiboPostsElement extends Components.WeiboPosts, HTMLStencilElement {}
  var HTMLWeiboPostsElement: {
    prototype: HTMLWeiboPostsElement;
    new (): HTMLWeiboPostsElement;
  };

  interface HTMLWeiboViewerElement extends Components.WeiboViewer, HTMLStencilElement {}
  var HTMLWeiboViewerElement: {
    prototype: HTMLWeiboViewerElement;
    new (): HTMLWeiboViewerElement;
  };
  interface HTMLElementTagNameMap {
    'about-data': HTMLAboutDataElement;
    'app-root': HTMLAppRootElement;
    'daily-snapshot': HTMLDailySnapshotElement;
    'time-series': HTMLTimeSeriesElement;
    'weibo-posts': HTMLWeiboPostsElement;
    'weibo-viewer': HTMLWeiboViewerElement;
  }
}

declare namespace LocalJSX {
  interface AboutData {}
  interface AppRoot {}
  interface DailySnapshot {}
  interface TimeSeries {
    'region'?: string;
  }
  interface WeiboPosts {
    'searchTxId'?: string;
  }
  interface WeiboViewer {
    'currentSearchTxid'?: string;
  }

  interface IntrinsicElements {
    'about-data': AboutData;
    'app-root': AppRoot;
    'daily-snapshot': DailySnapshot;
    'time-series': TimeSeries;
    'weibo-posts': WeiboPosts;
    'weibo-viewer': WeiboViewer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'about-data': LocalJSX.AboutData & JSXBase.HTMLAttributes<HTMLAboutDataElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'daily-snapshot': LocalJSX.DailySnapshot & JSXBase.HTMLAttributes<HTMLDailySnapshotElement>;
      'time-series': LocalJSX.TimeSeries & JSXBase.HTMLAttributes<HTMLTimeSeriesElement>;
      'weibo-posts': LocalJSX.WeiboPosts & JSXBase.HTMLAttributes<HTMLWeiboPostsElement>;
      'weibo-viewer': LocalJSX.WeiboViewer & JSXBase.HTMLAttributes<HTMLWeiboViewerElement>;
    }
  }
}


