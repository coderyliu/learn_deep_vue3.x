const express = require('express')

// 引入Vue,服务器生成的html是有vue模板生成的
// 需要用到vue-server-renderer,会基于Vue实例生成html字符串,是SSR核心\
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const APP=require('./dist/js/main.c82279cf.js').export

//创建一个renderer实例
const path = require('path')

const app = express()
app.use(static(path.join(__dirname,'./dist')))

// const vm = new Vue({ //创建一个vue实例
//   template: `<div>{{msg}}</div>`,
//   data() {
//     return {
//       msg: 'This is renderred by vue-server-renderer'
//     }
//   }
// })

const router = express.Router()

app.use(router)

router.get('/(.*)',async (req, res) => {
  //要返回给客户端的html
  //调用renderer实例的renderToString方法，将Vue实例渲染成字符串
  //该方法接受两个参数，第一个是Vue实例，第二个是一个回调函数，在渲染完成后执行
  // renderer.renderToString(vm, (err, html) => {
  //   res.send(`<!DOCTYPE html>
  //   <html lang="en">
  //     <head><title>Vue SSR</title></head>
  //     <body>
  //       ${html}
  //     </body>
  //   </html>`)
  // })
  const context={url:req.url}
  let htmlStr
  await APP(context).then(res=>{
    renderer.renderToString(res,context,(err,html)=>{
      if(!err){
        htmlStr=html
      }
    })
  })

  res.send(htmlStr)
})

app.on('error', (err) => {
  console.log(new Date(), ':', err)
})

app.listen(3000, () => {
  console.log('server is listening in 3000')
})