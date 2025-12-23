import { LinkedList } from "./linkedList";


export class HashMap{
    constructor(capacity = 16, loadFactor = 0.75){
        this.capacity = capacity;
        this.table = new Array(capacity)
        this.loadFactor = loadFactor
    }

    hash(key){
        let hashCode = 0;
        const prime = 31;

        for(let x=0; x < key.length; x++){
            hashCode = (hashCode * prime + key.charCodeAt(x))% this.capacity
        }

        return hashCode
    }


    set(key, input){
        const index = hash(key);

        //create LinkedList ? 
        this.table[index] = input
    }
}


const map = new HashMap()

console.log(map.hash(' '))