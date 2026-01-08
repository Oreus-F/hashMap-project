import { LinkedList } from "./Linked_List/script.js";


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

            if(append){
                list.append([key, input])
            }
        }


    }


    get(key){
        const index = this.hash(key);
        const list = this.table[index];
        let result = null

        let node = list.headNode();

        while(node){
            if(node.value[0] === key){
                result = node.value[1]
            }

            node = node.nextNode
        }

        return result
    }


    has(key){
        const index = this.hash(key);
        const list = this.table[index];
        let result = false;

        if(!list){return result}

        let node = list.headNode();

        while(node){
            if(node.value[0] === key){
                result = true
            }
            
            node = node.nextNode
        }

        return result
    }


    remove(key){
        const index = this.hash(key);
        const list = this.table[index];
        let result = false;
        let node = list.headNode();
        let pointer = 0;
        
        
        while(node){
            if(node.value[0] === key){
                result = true;
                list.removeAt(pointer)
            };

            node = node.nextNode;
            pointer++
        }

        return result
    }


    length(){
        let counter = 0;
        const array = this.table;

        for(let x=0; x < array.length; x++){
            if(array[x]){
                let node = array[x].headNode();

                while(node){
                    counter++
                    node = node.nextNode
                }
            }
        }

        return counter
    }

    clear(){
        const newTable = new Array(16);
        this.table = newTable
    }


    keys(){
        const keys = [];
        const array = this.table;

        for(let x=0; x<array.length; x++){
            if(array[x]){
                let node = array[x].headNode();

                while(node){
                    keys.push(node.value[0]);
                    node = node.nextNode
                }
            }
        }

        return keys
        
    }
    

    values(){
        const values = [];
        const array = this.table;

        for(let x=0; x<array.length; x++){
            if(array[x]){
                let node = array[x].headNode();

                while(node){
                    values.push(node.value[1]);
                    node = node.nextNode
                }
            }
        }

        return values
    
    }
}



const map = new HashMap();

map.set('Rama', 'woula');
map.set('Sita', 'oui');
map.set('Oreus', 'oui');
map.set('Loknar', 'Oklm');
map.set('HalAkar', 'Oui');
map.set('sita', 'non');
map.set('Rama', 'ok')

console.log(map.keys())
console.log(map.values())

map.clear();

console.log(map.keys())