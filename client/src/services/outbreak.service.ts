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

class OutbreakServiceController {

  private _timeseriesByDay = []
  public timeseriesByDay$= new BehaviorSubject<any[]>([])

  //the raw data, sorted into buckets per region (province/state for china, city for the west, and other countries)
  //so that you can view the historical trend for a region
  //or compare trends between regions to see how the virus is spreading
  //and predict where it might go next
  private _timeseriesByRegion = {}
  public timeseriesByRegion$ = new BehaviorSubject<any>({})

  //list of distinct regions
  public regions = []

  //I love Stencil - it's the best of Angular, without the boilerplate...
  //Great for prototyping!
  private arweaveService: ArweaveService = ArweaveService.defaultInstance

  constructor() {
  }

  //a list of distinct regions, which the timeseriesByRegion is keyed on
  getRegions() {
    return this.regions
  }

  getValidDays() {
    var days = []
    this._timeseriesByDay.forEach(day => {
      days.push(day.tags["DATE"])
    });

    days.sort((a, b) => {return Date.parse(a) -  Date.parse(b["DATE"]) })
    return days
  }

  //one region, historical data day by day
  getRegionalTimeSeries(region) {
    return this._timeseriesByRegion[region]
  }
  //one region, cases / deaths for a specific day
  getRegionByDate(region, date) {
    //gets numbers for a region on a specific date
    var data = this._timeseriesByRegion
                  [region].filter((eachDay) => {
                    return (eachDay.date == date)
                  })[0]

    return data;
  }
  
  
  //all regions, specific day
  getSnapshotByDate(date) {

    return this.regions.map(region => {
      return this._timeseriesByRegion[region].filter(regionalDailyReport => regionalDailyReport.date == date)[0]
    })

  }
  generateRegionalTimeseries() {
    this._timeseriesByDay.forEach(day => {
      var shortdate = day.tags["DATE"]
      day.data.forEach(regionalUpdate => {
        //not all regions have the provincestate
        var region = regionalUpdate["provincestate"] || regionalUpdate["countryregion"]

        regionalUpdate["date"] = shortdate
        regionalUpdate["region"] = region //to make it clear
        regionalUpdate["blockchainTxid"] = day.tags["txid"]
        regionalUpdate["verifyUrl"] = "https://viewblock.io/arweave/tx/"+day.tags["txid"]

        if (!this._timeseriesByRegion[region]) {
          this._timeseriesByRegion[region] = []
          this.regions.push(region)
        }
        
        this._timeseriesByRegion[region].push(regionalUpdate)
      })
    })
    this.timeseriesByRegion$.next(this._timeseriesByRegion) 
  }

  async getRegionalTimeseriesDataset(forceRefresh = false) {
    if (this._timeseriesByDay.length == 0 || forceRefresh)
    {
      this._timeseriesByDay = await this.arweaveService.getCollection("regional.daily")
      this._timeseriesByDay.sort((a, b) => {return Date.parse(a.tags["DATE"]) -  Date.parse(b.tags["DATE"]) })
      this.timeseriesByDay$.next(this._timeseriesByDay)

      this.generateRegionalTimeseries()
    }
  }
}

export const OutbreakService = new OutbreakServiceController();
