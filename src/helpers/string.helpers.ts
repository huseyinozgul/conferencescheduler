export const getLastWord = (str:string): string => {
    if (!str) return '';

    var strArray = str.split(" ");
    return strArray[strArray.length - 1];    
}

export const getDurationFromString = (str:string): number => {
    if (!str) return 0;
    const result = str.replace('min','');
    return Number(result);
}