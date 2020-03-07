//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const CSV = require('csv-parser')
const { Readable } = require('stream')
class ReadableString extends Readable {
  
    constructor(str) {
        super();
        this.sent = false

    }
  
    _read() {
      if (!this.sent) {
        this.push(Buffer.from(this.str));
        this.sent = true
      }
      else {
        this.push(null)
      }
    }
  }
  
//location of files downloaded by getLatestCaseData 
var suffix = "T23:00:00.000Z"
var allData = []
const csvPath = "./csv"

module.exports = {
  convertToJson: (files, onComplete) => {
        //iterate over the CSV data files in our source folder
    files.forEach(function (file) {
        /*
        console.log(file); 
        var csv = fs.readFileSync(directoryPath+'/'+file).toString()
        //Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
        csv = csv.replace("Province/State", "provincestate")
        csv = csv.replace("Country/Region", "countryregion")
        csv = csv.replace("Last Update", "lastUpdate")
        csv = csv.replace("Confirmed", "confirmed")
        csv = csv.replace("Deaths", "deaths")
        csv = csv.replace("Recovered", "recovered")*/

        var day = []

        //spawn an asynchronous operation to parse each file
        //replacing the header names with our own
        fs.createReadStream(csvPath+"/"+file)
        .pipe(CSV({
          headers: ["provincestate", "countryregion", "lastUpdate", "confirmed", "deaths", "recovered", "latitude", "longitude"],
          skipLines: 1
        }))
        .on('data', (data) => day.push(data))
        .on('end', () => {
          console.log("Parse "+file+" complete");
          allData.push(day)

          //if we have processed all of the files, write the concatenated dataset
          if (allData.length == files.length) {
            console.log("done, writing json")
            var fname = './covid-19-data-'+uuid.v4()

            fs.writeFileSync(fname, JSON.stringify(allData, null, 2))
            onComplete(allData, fname)
          }
        });
        
        /*
        var day = []
        var rows = csv.split(/\r?\n/)
        var normalized = []
        rows.forEach(row => {

        })
        for (var i=1; i<rows.length; i++) {
            var item = {}
            var values = rows[i].split(',')
            item["provincestate"] = values[0]
            item["countryregion"] = values[1]
            item["lastUpdate"]=(new Date(values[2]))
            item["confirmed"] = values[3]
            item["deaths"] = values[4]
            item["recovered"] = values[5]

            day.push(item)
        }
        allData.push(day)
        */
    });

  }
}
