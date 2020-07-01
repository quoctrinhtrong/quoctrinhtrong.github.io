class StudyGeneric {
    static printArray<T>(params: T[]): void {
        console.log(params);
    }
}

StudyGeneric.printArray<string>(['a','b','c']);
StudyGeneric.printArray<number>([1,2,3]);