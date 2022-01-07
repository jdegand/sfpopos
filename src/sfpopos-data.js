import data from './sfpopos-data.json'

data.forEach((obj, i) => {
    obj.id = i
})

export default data