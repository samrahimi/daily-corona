import { Component, State, h} from '@stencil/core';
import {OutbreakService} from '../../services/outbreak.service';

//from 01-16-2020
//data source: https://en.wikipedia.org/wiki/Timeline_of_the_2019%E2%80%9320_Wuhan_coronavirus_outbreak
//casesAndDeaths= []

@Component({
  tag: 'daily-snapshot',
  styleUrl: 'sars.css',
  shadow: false
})


export class SarsGraph {
  @State() timeseries = {}
  @State() snapshot = []
  @State() rawdata = []
  @State() regions = []
  @State() days = []
  @State() selectedDate = ""

  @State() sortBy = "cases"
  @State() sortDir = "desc"
  sortSnapshotData() {
    switch (this.sortBy) {
      case "cases":
        this.sortDir = "desc"
        this.snapshot.sort((a, b) => {return a.confirmed - b.confirmed})
        break
      case "deaths":
        this.sortDir = "desc"
        this.snapshot.sort((a, b) => {return a.deaths - b.deaths})
        break
      case "recovered":
        this.sortDir = "desc"
        this.snapshot.sort((a, b) => {return a.recovered - b.recovered})
        break
      case "region":
        this.sortDir = "asc"
        this.snapshot.sort((a, b) => {return a.region.localeCompare(b.region)})
        break
      case "country":
        this.sortDir = "asc"
        this.snapshot.sort((a, b) => {return a.countryregion.localeCompare(b.countryregion)})
        break
    }
    if (this.sortDir == "desc")
      this.snapshot.reverse();
  }
  getMostRecent(region) {
    //gets the most recent numbers for a region
    var data = this.timeseries
                  [region]
                  [this.timeseries[region].length - 1];

    return data;
  }

  getAllByDate(date) {
    //returns array of reports for ALL regions on ONE SPECIFIC DATE

    return this.regions.map(region => {
      console.log(JSON.stringify(this.timeseries[region], null, 2))
      return this.timeseries[region].filter(regionalDailyReport => regionalDailyReport.date == date)[0]
    })

    /*
    var data = this.timeseries.map(regionalTimeseries => {
        return regionalTimeseries.filter(regionalDailyReport => regionalDailyReport.date == date)[0]
     })
    return data;*/
  }

  componentDidLoad() {
    OutbreakService.timeseriesByRegion$.subscribe(data => {
      console.log(JSON.stringify(OutbreakService.getRegions()))
      
      //each region gets an array of daily data points, least -> most recent
      this.timeseries = {...data}
      this.regions.length = 0
      this.regions = [...OutbreakService.getRegions()]

      //the days for which we HAVE data
      this.days.length=0
      this.days = [...OutbreakService.getValidDays()]

      //default to most recent on page load
      this.selectedDate = this.days[this.days.length - 1]

      //a cross section of the data, defaults to today
      this.snapshot= this.getAllByDate(this.selectedDate)

      //do an initial sort - the default is by case count desc
      this.sortSnapshotData()

      console.log(JSON.stringify(this.snapshot, null, 2))
    })
    if (this.regions.length == 0)
      this.refreshData(); //todo: cache in localstorage with hourly expiration
                        //the blockchain source is only updated every 24h, so we 
                        //don't need to go there each time the data is requested
  }
  refreshData() {
    OutbreakService.getRegionalTimeseriesDataset(true)
  }
  render() {

    return ([
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons>
        <ion-title>Coronavirus Global Summary</ion-title>
        <ion-buttons slot="end"><ion-button href="/data/about"><ion-icon slot="icon-only" name="information-circle"></ion-icon></ion-button></ion-buttons>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title>Date {this.selectedDate}</ion-title>
      </ion-toolbar>

    </ion-header>,

    <ion-content class="ion-padding">
      <p>This screen displays a snapshot of 2019-nCoV (coronavirus) cases and deaths for a specific day, broken 
      out by region. You can skip to another date by using the dropdown, sort by clicking 
      the column headers, or view the history of the outbreak in any region by clicking on it.</p>
      
      <p>First time here? <ion-router-link href="/data/about">Please read the info!</ion-router-link></p>

      <div class="hscroll">
      <div class="min-500">

      <ion-grid>
          <ion-row>
            <ion-col><b><a href="#" onClick={() => {this.sortBy = 'country'; this.sortSnapshotData()}}>Country</a></b></ion-col>
            <ion-col><b><a href="#" onClick={() => {this.sortBy = 'region'; this.sortSnapshotData()}}>Region</a></b></ion-col>
            <ion-col><b><a href="#" onClick={() => {this.sortBy = 'cases'; this.sortSnapshotData()}}>Cases</a></b></ion-col>
            <ion-col><b><a href="#" onClick={() => {this.sortBy = 'deaths'; this.sortSnapshotData()}}>Deaths</a></b></ion-col>
            <ion-col><b><a href="#" onClick={() => {this.sortBy = 'recovered'; this.sortSnapshotData()}}>Recovered</a></b></ion-col>
          </ion-row>

          {this.snapshot.map(regionalSnapshot => {
            if (regionalSnapshot) {
            return (
              <ion-row>
                <ion-col>
                  {regionalSnapshot.countryregion}
                </ion-col>
                <ion-col>
                  <ion-router-link href={"/time-series/region/"+regionalSnapshot.region}>
                  {regionalSnapshot.region}
                  </ion-router-link>
                </ion-col>
                <ion-col>{regionalSnapshot.confirmed}</ion-col>
                <ion-col>{regionalSnapshot.deaths}</ion-col>
                <ion-col>{regionalSnapshot.recovered}</ion-col>

              </ion-row>)
            } else {
              return ""
            }      


          })}

      </ion-grid>
      </div></div>
      </ion-content>
    ]
    );
  }




}