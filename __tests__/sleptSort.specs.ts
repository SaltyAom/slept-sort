import sleptSort from '../index'

describe("Slept Sort", () => {
    it("should sort asynchronously", async () => {
        let sorted = await sleptSort([2,1,3])

        expect(sorted).toEqual([1,2,3])
    })

    it("should sort same value", async () => {
        let sorted = await sleptSort([2,2,1,3])

        expect(sorted).toEqual([1,2,2,3])
    })
})