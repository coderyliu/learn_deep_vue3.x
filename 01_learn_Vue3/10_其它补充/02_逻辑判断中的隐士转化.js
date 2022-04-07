// 逻辑判断时, 可以转化的情况下, 
// 会隐式的自动将一个string类型成一个number类型再来进行判断(隐式转化)
const score='100'
if(score>90){
  console.log('优秀')
}else{
  console.log('及格')
}