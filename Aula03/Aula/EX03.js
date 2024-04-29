const filtrarArray = (arr, filtro) => {
    const newArr = []
    for(let element of arr) {
        const vaiFicar = filtro(element)
        if(vaiFicar) newArr.push(element)
    }
return newArr
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = filtrarArray(arr, (e) => e % 2 === 0)
console.log(newArr)

