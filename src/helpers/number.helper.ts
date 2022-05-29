export const getDurationFromString = (str:string): number => {
    if (!str) return 0;
    const result = str.replace('min','');
    return Number(result);
}