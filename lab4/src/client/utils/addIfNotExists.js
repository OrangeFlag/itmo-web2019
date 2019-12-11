export function addIfNotExists(array, item) {
    if (array.indexOf(item) === -1){
        return [...array, item]
    } else{
        return array
    }
}