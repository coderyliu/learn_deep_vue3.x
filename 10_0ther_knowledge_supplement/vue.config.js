const path=require('path')
module.exports={
  outputDir:path.join(__dirname,'dist'),
  configureWebpack:(config)=>{
    // config.entry='./src/entry.server.js'
    config.entry='./src/entry.client.js'
    // config.output={
    //   path:path.join(__dirname,'dist'),
    //   filename:'client_bundle.js'
    // }
  }
}