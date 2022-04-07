import {defineStore} from 'pinia'

export const listStore=defineStore('list',{
  state(){
    return {
      books:[
        {name:'深入浅出VueJs',counter:20,price:89.9},
        {name:'javaScript高级程序设计',counter:20,price:111.9},
        {name:'深入浅出NodeJs',counter:20,price:50.9},
        {name:'javascript权威指南',counter:20,price:30.9}
      ]
    }
  }
})