const sentense = "Hello my friends!"


export function sum(a:number,b:number) {
    return a + b;
}
export function multiply(a:number,b:number) {
    return a - b;
}
export function splitIntoWords(sentense: string) {
    const words =  sentense.toLowerCase().split(" ")
       return words.filter(w=> w !== "" && w !== "-")
        .map(w => w
            .replace("!"," ")
            .replace(".","")
            .replace(",",""));
}