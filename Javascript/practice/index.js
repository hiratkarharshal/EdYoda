const mFunc = (arg) =>{

if (arg != undefined && arg !== null) {
     return Object.keys (arg).map((objKey) => {
          return (
            [...Array(arg[objKey])].map((orderItem, key) => {

                return ({

                    id: arg[objKey].id,

                    name: arg[objKey].name

                });

            })
          )
}).reduce((acc, item) => { return acc.concat(item)

}, []);

} else {

return []

}
}
var objCus = [{
    "name":"harshal",
    "age":24
},
{
    "name":"harshal",
    "age":24
}]
console.log(mFunc(objCus));