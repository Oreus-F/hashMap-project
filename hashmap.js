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
        let list = this.table[index]
        let append = true;

        if(list === undefined){
            list = new LinkedList()
            list.append([key, input])
            this.table[index] = list
        } else {
            let node = list.headNode();

            while(node){
                if(node.value[0] === key){
                    node.value[1] = input
                    append = false;
                    break
                }

                node = node.nextNode
            }

        }

        if(append){
            list.append([key, input])
        }

    }


    get(key){
        const index = this.hash(key);
        const list = this.table[index];

        if(list === undefined){
            return null
        } else {
            let node = list.headNode();

            while(node){
                if(node.value[0] === key){
                    return node.value[1]
                }

                node = node.nextNode
            }
        }
    }
}



const map = new HashMap();

map.set('Rama', 'woula');
map.set('Sita', 'AWILIKIWI')

map.set('Sita', 'oui')
