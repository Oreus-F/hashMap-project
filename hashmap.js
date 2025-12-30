import { LinkedList } from "./linkedList.js";


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
        const index = this.hash(key);

        if(this.table[index] === undefined){
            const list = new LinkedList()
            list.append([key, input])
            this.table[index] = list
        } else {
            const list = this.table[index];
            list.append([key, input])
        }
        // this.table[index] = input

        console.log(this.table[index])
    }
}


const map = new HashMap();

map.set('Rama', 'woula');
map.set('Sita', 'AWILIKIWI')

console.log(map)
