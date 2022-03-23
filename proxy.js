const object = {name: "Dennis"}
const copyA = new Proxy(object, {
    get: (obj, property) => {
        return property in obj ? obj[property] : 'null'
    },
    set: (object, property, value) => {
        return object[property] = value
    }
})
console.log(copyA.user, copyA.name);// null Dennis
copyA.user = 3
console.log(copyA.user, copyA.name);// 3 Dennis
copyA.name = 'IAN'
console.log(copyA.user, copyA.name);// 3 IAN
