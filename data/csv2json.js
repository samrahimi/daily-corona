//requiring path and fs modules
const path = require('path');
const fs = require('fs');
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
  
//joining path of directory 
const directoryPath = './csv'
//passsing directoryPath and callback function
var suffix = "T23:00:00.000Z"
var allData = []
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
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

        fs.createReadStream(directoryPath+'/'+file)
        .pipe(CSV())
        .on('data', (data) => day.push(data))
        .on('end', () => {
          console.log(day);
          // [
          //   { NAME: 'Daffy Duck', AGE: '24' },
          //   { NAME: 'Bugs Bunny', AGE: '22' }
          // ]
          allData.push(day)
          if (allData.length == files.length) {
            console.log("done, writing")
            fs.writeFileSync('./archive-thru-feb-25.json', JSON.stringify(allData, null, 2))
        
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
});
