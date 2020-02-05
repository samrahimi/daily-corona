import { Component, Prop, State, h} from '@stencil/core';
import {OutbreakService} from '../../services/outbreak.service';
import {jsonExport} from '../../helpers/utils';

//from 01-16-2020
//data source: https://en.wikipedia.org/wiki/Timeline_of_the_2019%E2%80%9320_Wuhan_coronavirus_outbreak
//casesAndDeaths= []

@Component({
  tag: 'time-series',
  styleUrl: 'series.css',
  shadow: false
})


export class RegionalTimeSeries {
  @State() timeseries = {}
  @State() rawdata = []
  @State() regions = []
  @State() days = []
  @State() selectedDate = ""
  @State() selectedTimeseries
  //passed in the url
  @Prop() region = ""



  getMostRecent(region) {
    //gets the most recent numbers for a region
    var data = this.timeseries
                  [region]
                  [this.timeseries[region].length - 1];

    return data;
  }

  getByDate(region, date) {
    //gets numbers for a region on a specific date
    var data = this.timeseries
                  [region].filter((eachDay) => {
                    eachDay.date == date
                  })[0]

    return data;
  }

  componentDidLoad() {
    OutbreakService.timeseriesByRegion$.subscribe(data => {
      console.log(JSON.stringify(OutbreakService.getRegions()))
      
      //each region gets an array of daily data points, least -> most recent
      this.timeseries = {...data}
      this.regions.length = 0
      this.regions = [...OutbreakService.getRegions()]

      //the days for which we HAVE data
      this.days.length = 0
      this.days = [...OutbreakService.getValidDays()]

      //default to most recent on page load
      this.selectedDate = this.days[this.days.length - 1]

      //the actual data we're displaying on this page :)
      this.selectedTimeseries = this.timeseries[this.region]
    })
    
    //if the user is coming from the daily snapshot page
    //the service will already be hydrated with data
    //and we don't need to call this. 
    //the list of regions gets dervied from the master dataset
    //and therefore its existence means the actual data exists
    if (OutbreakService.regions.length == 0)
      this.refreshData()
    
  }
  getNewConfirmedCases(day, index) {
    if (index > 0 && !isNaN(day.confirmed) && !isNaN(this.selectedTimeseries[index-1].confirmed)) 
      return day.confirmed - this.selectedTimeseries[index-1].confirmed
    else 
      return 0
    
  }
  getNewConfirmedDeaths(day, index) {
    if (index > 0 && !isNaN(day.deaths) && !isNaN(this.selectedTimeseries[index-1].deaths)) 
      return day.deaths - this.selectedTimeseries[index-1].deaths
    else 
      return ""
    
  }

  refreshData() {
    OutbreakService.getRegionalTimeseriesDataset(true)
  }
  render() {

    return ([
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/" />
        </ion-buttons>
        <ion-title>{this.region}</ion-title>
      </ion-toolbar>
    </ion-header>,

    <ion-content class="ion-padding">
      <h3>Historical 2019-nCoV Data: {this.region}</h3>
      <p>
         This view of the Daily Coronavirus archive lets you see how the outbreak has evolved / is evolving over time, in a specific region. 
         Regional data currently goes back to January 24th, 2020, shortly after the virus began spreading internationally.   
         Data from WHO via JHU CSSE 
      </p>      
      <p>Available Formats: 
      <a onClick={() => {jsonExport(`2019ncov-daily-${this.region}.json`, this.selectedTimeseries)}}>
      JSON</a> (or copy-paste to Excel)
      </p>

      <div class="hscroll">
      <div class="min-500">
      <ion-grid>
          <ion-row>
            <ion-col size="2"><b>Date</b></ion-col>
            <ion-col size="1"><b>Cases</b></ion-col>
            <ion-col size="2"><b>New Cases</b></ion-col>
            <ion-col size="1"><b>Deaths</b></ion-col>
            <ion-col size="2"><b>New Deaths</b></ion-col>
            <ion-col size="2"><b>Recovered</b></ion-col>
            <ion-col size="2"><b>Verify</b></ion-col>

          </ion-row>

            {
              this.selectedTimeseries.map((day, index) => {
                return (
                <ion-row>
                  <ion-col size="2">{day.date}</ion-col>
                  <ion-col size="1">{day.confirmed}</ion-col>
                  <ion-col size="2">{this.getNewConfirmedCases(day, index)}</ion-col>

                  <ion-col size="1">{day.deaths}</ion-col>
                  <ion-col size="2">{this.getNewConfirmedDeaths(day, index)}</ion-col>

                  <ion-col size="2">{day.recovered}</ion-col>
              <ion-col size="2">
                <a href={day.verifyUrl}>
                {day.blockchainTxid.substr(0, 10)}...
                </a>
              </ion-col>
                </ion-row>
                )

              })
            }

      </ion-grid>
      </div>
      </div>

      <h3>Support Our Efforts</h3>

      <p><b class="darkred">If you find this service useful, and/or believe that we are doing something that 
      is important and beneficial to humanity, PLEASE make a confidential, secure donation to one of the 
      addresses below. Your contribution will make a huge difference in ensuring that this project moves 
      forward at a rapid pace, and that I am able to continue working full-time on this and other projects, 
      projects which have the potential to make a direct impact on the course that this outbreak will take in the 
      critical weeks ahead</b></p> 
      
      <b>ETH and Tokens: 0x71dfD8f3664a6c9925D4275169721e1a0f4281fc</b><br />
      <b>BTC / other currencies, please DM me on Twitter</b>

      <p>
      Whatever your ability to contribute financially, I hope you join the fight against the coronavirus and help out 
      with this project, in whatever way you are most capable! This is not like a tsunami that causes devastation somewhere far away, 
      it is more like an asteroid hurtling towards Earth, and we must do everything that we can to knock it off course. 
    
<br /><br />
      <i>MIGHT</i> this become a pandemic that costs 10 million or even 100 million human lives? YES.<br /> 
      <i>WILL</i> it? MAYBE! But not if the whole world works together to stop this thing!
      <br /><br />
      To reach this goal, sharing and seeking the TRUTH is a critical step in the right direciton.
      </p>

      <p>
      Please follow me on Twitter! <a target="_blank" href="https://twitter.com/2020writein">@2020WriteIn</a>
      </p>
      </ion-content>
    ]
    );
  }

}