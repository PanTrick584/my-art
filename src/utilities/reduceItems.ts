import { ArtworksType } from "../types/types";

export const reduceStructure = (slices: number[], products: any): ArtworksType => {
    const splitArrays = [];
    const sliceL = slices.length;

    let start = 0
    let i = 0
    for (i; i < sliceL; i++) {
        let end = start + slices[i]
        const reducedArray = products?.slice(start, end)

        reducedArray?.length && splitArrays.push(reducedArray)
        start = end
        
        if (i === sliceL -1 && products?.length > end) i = -1
    }

    return splitArrays;
}