function getNumberInfo(x: number): number {
    return 100;
}

function getStringInfo(x: string): string {
    return x;
}

// Generic
function getInfo<T>(test:T): T {
    return test;
}

getInfo<string>('abc');