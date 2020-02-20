export interface PokeData {

    next:string;
    previous:string;
    results:Result[];

}


export interface Result {

    name:string;
    url:string;
}