//PURPOSE: updates the coronavirus data archive with the latest datasets
//USAGE: set the wallet path, and set your gh credentials in getLatestCaseData
//then, run this every 24 hours

const APP_VERSION = "1.1.0"
const walletPath = "/Users/sam/Downloads/arweave-keyfile-JEsrrfZGLyq7ga7anWGwq41l8EOK91yY_nOB_AtjB3Q.json"

const publisher = require('./arweavePublisher')
const gitter = require('./getLatestCaseData')
const parser = require('./csv2json')

//any valid github username and password, for authenticating your API requests
const ghUsername=""
const ghPassword = ""

gitter.updateFromGithub(ghUsername, ghPassword).then(newFiles => {
    if (newFiles.length == 0) {
        console.log("no updates to publish")
        return
    }
    parser.convertToJson(newFiles, (data, filename) => {
        console.log(JSON.stringify(data))
        publisher.uploadArchive(APP_VERSION, walletPath, filename)

        /*
        json.forEach(dayOfData => {
            publisher.uploadArchive(APP_VERSION, walletPath, dayOfData)
        })*/
    })
})
