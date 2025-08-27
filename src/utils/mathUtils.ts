export function decodeSumToNumbers(sum: number): number[]{
    const items = [1, 2, 4, 8, 16, 32, 64];

    return items.filter(item => (sum & item) !== 0);
}

export function arraysEqual(a: number[], b: number[]): boolean{
    if(a.length !== b.length){
        return false;
    }

    return a.every((value, index) => value === b[index]);
}

export function generateItems(totalItems: number): number[]{
    if(totalItems < 0){
        throw new Error('Items total must be a positive number')
    }

    const items: number[] = [];

    for (let i = 0; i < totalItems; i++) {
        items.push(1 << i);
    }

    return items;
}
