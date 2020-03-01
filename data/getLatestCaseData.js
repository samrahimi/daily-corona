//check for updated data from JHU github and download anything new
var getFolderContentsAPI = "https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_daily_reports?ref=master"
var downloadFolder = './csv'

const path = require('path');
const fs = require('fs');
const fetch = require("node-fetch");
const base64 = require('base-64');

module.exports = {
updateFromGithub: (ghUsername, ghPassword) => {
    return new Promise((resolve, reject) => {
            console.log("checking for new files in https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports")
            fs.readdir(downloadFolder, function (err, files) {
                var newFiles = []
                fetch(getFolderContentsAPI, 
                    {
                        method: 'get',
                        headers: {
                            'Authorization': 'Basic ' + base64.encode(ghUsername + ":" + ghPassword),
                        }
                    }
                )
                .then(response => response.json())
                .then(data => {
                    console.log('got contents of remote folder')
                    console.log(data)
                    
                    var newCsvs = data.filter((item) => (item.name.indexOf('.csv')>0 && 
                            files.indexOf(item.name) < 0))



                    newCsvs.forEach(item => {
                        
                        //download all .csv files that we don't already have
                        if (item.name.indexOf('.csv')>0 && 
                            files.indexOf(item.name) < 0) {
                                fetch(item.download_url, 
                                    {
                                        headers: {
                                            'Authorization': 'Basic ' + base64.encode(ghUsername + ":" + ghPassword),
                                        }
                                    }
                                ).then(response => response.text())
                                    .then(contents => {

                                        fs.writeFileSync(downloadFolder+'/'+item.name, contents)
                                        console.log("downloaded "+item.name)
                                        newFiles.push(item.name)

                                        if (newFiles.length == newCsvs.length) {
                                            console.log("done")
                                            resolve(newFiles)
                                        }
                                    })
                        } else {
                            console.log("skipping "+item.name)
                        }
                    })
                }).then((results) => {
                    console.log("downloads in progress...")
                })
                .catch(err => reject(err))
            })
        })

    }
}