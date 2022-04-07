// 1.对象是引用类型
// 2.对象浅拷贝
// const info={name:'liu',age:21,friend:{name:'kobe'}}
// const obj=Object.assign({},info)

// info.name='curry'
// console.log(obj.name)

// info.friend.name='lihua'
// console.log(obj.friend.name)

// 3.对象的深拷贝
const info={name:'liu',age:21,friend:{name:'kobe'}}
const newObj=JSON.parse(JSON.stringify(info))

info.name='curry'
console.log(newObj.name)

info.friend.name='lihua'
console.log(newObj.friend.name)
