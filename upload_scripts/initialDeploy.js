//right now this is a manual process
//export the google sheets project from JHU as JSON
//then run uploadArchive to publish the historical data, day by day

var deployer = require('./deploy-archive')

deployer.uploadArchive("1.0.3",  
"/Users/sam/Downloads/arweave-keyfile-JEsrrfZGLyq7ga7anWGwq41l8EOK91yY_nOB_AtjB3Q.json",
"../data/archive-thru-feb-25.json"
) 

//each day afterwards, we wait for the JHU data to be updated 
//with the latest numbers from China and abroad, then we export 
//the sheet with the latest numbers and call uploadDay below
//it only take 5 minutes to do this step, but we should automate
//the daily updates!

/*
deployer.uploadDay(
    "1.0.2",
    [
        {
            "provincestate": "Hubei",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T23:43:00.000Z",
            "confirmed": 16678,
            "deaths": 479,
            "recovered": 522
        },
        {
            "provincestate": "Zhejiang",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:33:00.000Z",
            "confirmed": 895,
            "deaths": 0,
            "recovered": 63
        },
        {
            "provincestate": "Guangdong",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T02:03:00.000Z",
            "confirmed": 870,
            "deaths": 0,
            "recovered": 32
        },
        {
            "provincestate": "Henan",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:13:00.000Z",
            "confirmed": 764,
            "deaths": 2,
            "recovered": 41
        },
        {
            "provincestate": "Hunan",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:43:00.000Z",
            "confirmed": 661,
            "deaths": 0,
            "recovered": 35
        },
        {
            "provincestate": "Jiangxi",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:33:00.000Z",
            "confirmed": 548,
            "deaths": 0,
            "recovered": 27
        },
        {
            "provincestate": "Anhui",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:13:00.000Z",
            "confirmed": 530,
            "deaths": 0,
            "recovered": 20
        },
        {
            "provincestate": "Chongqing",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T00:13:00.000Z",
            "confirmed": 366,
            "deaths": 2,
            "recovered": 14
        },
        {
            "provincestate": "Jiangsu",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T02:43:00.000Z",
            "confirmed": 341,
            "deaths": 0,
            "recovered": 13
        },
        {
            "provincestate": "Sichuan",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T00:53:00.000Z",
            "confirmed": 301,
            "deaths": 1,
            "recovered": 23
        },
        {
            "provincestate": "Shandong",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:03:00.000Z",
            "confirmed": 298,
            "deaths": 0,
            "recovered": 13
        },
        {
            "provincestate": "Shanghai",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T00:23:00.000Z",
            "confirmed": 233,
            "deaths": 1,
            "recovered": 12
        },
        {
            "provincestate": "Beijing",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T08:33:00.000Z",
            "confirmed": 228,
            "deaths": 1,
            "recovered": 23
        },
        {
            "provincestate": "Fujian",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T12:13:00.000Z",
            "confirmed": 194,
            "deaths": 0,
            "recovered": 3
        },
        {
            "provincestate": "Heilongjiang",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:23:00.000Z",
            "confirmed": 190,
            "deaths": 2,
            "recovered": 4
        },
        {
            "provincestate": "Shaanxi",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T02:43:00.000Z",
            "confirmed": 165,
            "deaths": 0,
            "recovered": 2
        },
        {
            "provincestate": "Guangxi",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T00:43:00.000Z",
            "confirmed": 150,
            "deaths": 0,
            "recovered": 10
        },
        {
            "provincestate": "Hebei",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T02:53:00.000Z",
            "confirmed": 135,
            "deaths": 1,
            "recovered": 4
        },
        {
            "provincestate": "Yunnan",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T23:23:00.000Z",
            "confirmed": 122,
            "deaths": 0,
            "recovered": 5
        },
        {
            "provincestate": "Hainan",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T02:53:00.000Z",
            "confirmed": 91,
            "deaths": 1,
            "recovered": 4
        },
        {
            "provincestate": "Liaoning",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T14:13:00.000Z",
            "confirmed": 81,
            "deaths": 0,
            "recovered": 2
        },
        {
            "provincestate": "Shanxi",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T23:23:00.000Z",
            "confirmed": 81,
            "deaths": 0,
            "recovered": 4
        },
        {
            "provincestate": "Tianjin",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T13:33:00.000Z",
            "confirmed": 67,
            "deaths": 0,
            "recovered": 2
        },
        {
            "provincestate": "Guizhou",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:23:00.000Z",
            "confirmed": 64,
            "deaths": 0,
            "recovered": 5
        },
        {
            "provincestate": "Gansu",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T15:43:00.000Z",
            "confirmed": 57,
            "deaths": 0,
            "recovered": 4
        },
        {
            "provincestate": "Jilin",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T00:43:00.000Z",
            "confirmed": 54,
            "deaths": 0,
            "recovered": 1
        },
        {
            "provincestate": "Inner Mongolia",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:53:00.000Z",
            "confirmed": 42,
            "deaths": 0,
            "recovered": 1
        },
        {
            "provincestate": "Ningxia",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-04T02:13:00.000Z",
            "confirmed": 34,
            "deaths": 0,
            "recovered": 1
        },
        {
            "provincestate": "Xinjiang",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T02:03:00.000Z",
            "confirmed": 32,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Thailand",
            "lastUpdate": "2020-02-04T15:33:00.000Z",
            "confirmed": 25,
            "deaths": 0,
            "recovered": 5
        },
        {
            "countryregion": "Singapore",
            "lastUpdate": "2020-02-04T15:33:00.000Z",
            "confirmed": 24,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Japan",
            "lastUpdate": "2020-02-04T16:43:00.000Z",
            "confirmed": 22,
            "deaths": 0,
            "recovered": 1
        },
        {
            "provincestate": "Hong Kong",
            "countryregion": "Hong Kong",
            "lastUpdate": "2020-02-05T02:33:00.000Z",
            "confirmed": 18,
            "deaths": 1,
            "recovered": 0
        },
        {
            "provincestate": "Qinghai",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-05T01:23:00.000Z",
            "confirmed": 17,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "South Korea",
            "lastUpdate": "2020-02-04T15:33:00.000Z",
            "confirmed": 16,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Germany",
            "lastUpdate": "2020-02-03T20:53:00.000Z",
            "confirmed": 12,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Taiwan",
            "countryregion": "Taiwan",
            "lastUpdate": "2020-02-04T14:53:00.000Z",
            "confirmed": 11,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Macau",
            "countryregion": "Macau",
            "lastUpdate": "2020-02-04T04:43:00.000Z",
            "confirmed": 10,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Malaysia",
            "lastUpdate": "2020-02-04T07:33:00.000Z",
            "confirmed": 10,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Vietnam",
            "lastUpdate": "2020-02-03T21:43:00.000Z",
            "confirmed": 8,
            "deaths": 0,
            "recovered": 1
        },
        {
            "countryregion": "France",
            "lastUpdate": "2020-02-01T01:52:00.000Z",
            "confirmed": 6,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "United Arab Emirates",
            "lastUpdate": "2020-02-02T05:43:00.000Z",
            "confirmed": 5,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "New South Wales",
            "countryregion": "Australia",
            "lastUpdate": "2020-02-01T18:12:00.000Z",
            "confirmed": 4,
            "deaths": 0,
            "recovered": 2
        },
        {
            "provincestate": "Victoria",
            "countryregion": "Australia",
            "lastUpdate": "2020-02-01T18:12:00.000Z",
            "confirmed": 4,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Queensland",
            "countryregion": "Australia",
            "lastUpdate": "2020-02-04T16:53:00.000Z",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "India",
            "lastUpdate": "2020-02-03T21:43:00.000Z",
            "confirmed": 3,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "South Australia",
            "countryregion": "Australia",
            "lastUpdate": "2020-02-02T22:33:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Toronto, ON",
            "countryregion": "Canada",
            "lastUpdate": "2020-02-04T00:13:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Italy",
            "lastUpdate": "2020-01-31T08:15:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Philippines",
            "lastUpdate": "2020-02-02T03:33:00.000Z",
            "confirmed": 2,
            "deaths": 1,
            "recovered": 0
        },
        {
            "countryregion": "Russia",
            "lastUpdate": "2020-01-31T16:13:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "UK",
            "lastUpdate": "2020-02-01T01:52:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Chicago, IL",
            "countryregion": "US",
            "lastUpdate": "2020-02-01T19:43:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "San Benito, CA",
            "countryregion": "US",
            "lastUpdate": "2020-02-03T03:53:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Santa Clara, CA",
            "countryregion": "US",
            "lastUpdate": "2020-02-03T00:43:00.000Z",
            "confirmed": 2,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Belgium",
            "lastUpdate": "2020-02-04T15:43:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Cambodia",
            "lastUpdate": "2020-01-31T08:15:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "British Columbia",
            "countryregion": "Canada",
            "lastUpdate": "2020-02-01T18:12:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "London, ON",
            "countryregion": "Canada",
            "lastUpdate": "2020-02-04T00:03:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Finland",
            "lastUpdate": "2020-01-31T08:15:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Tibet",
            "countryregion": "Mainland China",
            "lastUpdate": "2020-02-01T01:52:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Nepal",
            "lastUpdate": "2020-01-31T08:15:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Spain",
            "lastUpdate": "2020-02-01T23:43:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Sri Lanka",
            "lastUpdate": "2020-01-31T08:15:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "countryregion": "Sweden",
            "lastUpdate": "2020-02-01T02:13:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Boston, MA",
            "countryregion": "US",
            "lastUpdate": "2020-02-01T19:43:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Los Angeles, CA",
            "countryregion": "US",
            "lastUpdate": "2020-02-01T19:53:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Orange, CA",
            "countryregion": "US",
            "lastUpdate": "2020-02-01T19:53:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Seattle, WA",
            "countryregion": "US",
            "lastUpdate": "2020-02-01T19:43:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        },
        {
            "provincestate": "Tempe, AZ",
            "countryregion": "US",
            "lastUpdate": "2020-02-01T19:43:00.000Z",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
        }
    ],
"/Users/sam/Downloads/arweave-keyfile-JEsrrfZGLyq7ga7anWGwq41l8EOK91yY_nOB_AtjB3Q.json"
)
*/
