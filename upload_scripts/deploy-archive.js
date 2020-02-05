//deploys a json archive of time series coronavirus data to arweave blockchain, appropriately tagged
const Arweave = require('arweave/node');
const fs = require('fs')


//change this to your own wallet file, which obviously should not be part of this repo 

//ref to the initialized Arweave SDK
let _arweave = null

//typical singleton pattern for getting the live SDK instance
const getSdkInstance = () => {
    if (_arweave == null)
        _arweave = Arweave.init({
            host: 'arweave.net',// Hostname or IP address for a Arweave host
            port: 443,          // Port
            protocol: 'https',  // Network protocol http or https
            timeout: 300000,     // Network request timeouts in milliseconds
            logging: false,     // Enable network request logging
        }
    );
    
    return _arweave
}

module.exports = {
    getSdk: () => {
        return getSdkInstance()
    },
    //uploads multiple days of data at once
    uploadArchive: async(apiVersion, WALLET_FILE, JSON_DATA) => {
        
        const arweave = getSdkInstance()
        arweave.network.getInfo().then(console.log);
        
        const privateKey = JSON.parse(fs.readFileSync(WALLET_FILE))
        arweave.wallets.jwkToAddress(privateKey).then(async(address) => {
            console.log(address);
            let dataset = JSON.parse(fs.readFileSync(JSON_DATA, "utf8"))
            dataset.forEach(async(dayOfPestilence) => {
                let tx = await arweave.createTransaction({
                    data: JSON.stringify(dayOfPestilence)
                }, privateKey)
        
                tx.addTag("Content-Type", "application/javascript")
                tx.addTag("AR_APP_ID",  "coronavirus.api")
                tx.addTag("API_VERSION", apiVersion)
                tx.addTag("AR_APP_ROLE", "data.timeseries")
                tx.addTag("AR_COLLECTION_ID", "regional.daily")
                tx.addTag("DATE", dayOfPestilence[0].lastUpdate.split('T')[0])
        
                tx.addTag("AR_CREATED_AT", Date.now())
                
                await arweave.transactions.sign(tx, privateKey);
                const response = await arweave.transactions.post(tx);
            
                console.log(`Wrote data for ${dayOfPestilence[0].lastUpdate.split('T')[0]}. Tx is posted and will be mined shortly. Check status at https://viewblock.io/arweave/tx/${tx.id}`);
            })
            console.log("time series upload complete and may be used once mined")
        
        });
        
    },

    //uploads a single day of data
    uploadDay: async(apiVersion, dayOfPestilence, WALLET_FILE) => {
        
        const arweave = getSdkInstance()
        
        arweave.network.getInfo().then(console.log);
        
        const privateKey = JSON.parse(fs.readFileSync(WALLET_FILE))
        
        
        
            arweave.wallets.jwkToAddress(privateKey).then(async(address) => {
                console.log(address);

                    let tx = await arweave.createTransaction({
                        data: JSON.stringify(dayOfPestilence)
                    }, privateKey)
            
                    tx.addTag("Content-Type", "application/javascript")
                    tx.addTag("AR_APP_ID",  "coronavirus.api")
                    tx.addTag("API_VERSION", apiVersion)
                    tx.addTag("AR_APP_ROLE", "data.timeseries")
                    tx.addTag("AR_COLLECTION_ID", "regional.daily")
                    tx.addTag("DATE", dayOfPestilence[0].lastUpdate.split('T')[0])
            
                    tx.addTag("AR_CREATED_AT", Date.now())
                        
                    await arweave.transactions.sign(tx, privateKey);
                    const response = await arweave.transactions.post(tx);
                
                    console.log(`Tx is posted and will be mined shortly. Check status at https://viewblock.io/arweave/tx/${tx.id}`);
                    console.log("time series updated with new day")
            })
    }
}

