/**
 * Slept sort
 * @param { number[] } array Array of number to be sorted.
 * @returns { Promise } Sorted array.
 */
const sleptSort = (array: number[]) => new Promise(resolve => {
    let _sorted: number[] = []

    array.forEach(number => {
        setTimeout(() => {
            _sorted.push(number)

            if(_sorted.length === array.length)
                resolve(_sorted)
        }, number)
    })
})

export default sleptSort