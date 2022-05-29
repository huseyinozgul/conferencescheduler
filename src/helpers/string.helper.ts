export const getLastWord = (str:string): string => {
    if (!str) return '';

    var strArray = str.split(" ");
    return strArray[strArray.length - 1];    
}