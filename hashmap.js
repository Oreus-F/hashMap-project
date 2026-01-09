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
        if(this.isLoaded()){
            console.log('now')
            this.growArray()
        }

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


    isLoaded(){
        const length = this.length();
        return length >= (this.capacity * this.loadFactor) ? true : false
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


    entries(){
        const entries = [];
        const array = this.table;

        for(let x=0; x<array.length; x++){
            if(array[x]){
                let node = array[x].headNode();

                while(node){
                    entries.push(node.value);
                    node = node.nextNode
                }
            }
        }

        return entries
    
    }


    growArray(){
        this.capacity = this.capacity * 2;
        const previousTable = this.table;
        this.table = new Array(this.capacity);

        for(let x=0; x<previousTable.length;x++){
            if(previousTable[x]){
                let node = previousTable[x].headNode();

                while(node){
                    this.set(node.value[0], node.value[1]);
                    node = node.nextNode;
                }
            }
        }
    }
    
}