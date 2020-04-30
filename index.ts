/**
 * Slept sort
 * @param { number[] } array Array of number to be sorted.
 * @returns { Promise } Sorted array.
 */
export default (array: number[]) => new Promise(resolve => {
    let _sorted: number[] = []

    array.map(number =>
        setTimeout((_: undefined) => {
            _sorted.push(number)

            if(_sorted.length === array.length)
                resolve(_sorted)
        }, number)
    )
})