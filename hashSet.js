import { LinkedList } from "./linkedList.js";


export class HashSet{
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


    set(key){
        if(this.isLoaded()){
            this.growArray()
        }

        const index = this.hash(key);
        let list = this.table[index]

        if(list === undefined){
            list = new LinkedList()
            list.append(key)
            this.table[index] = list
        } else {
            let node = list.headNode();
            
            while(node){
                if(node.value === key) return
            }
            
            list.append(key)
            
        }


    }


    get(key){
        const index = this.hash(key);
        const list = this.table[index];
        let result = null

        let node = list.headNode();

        while(node){
            if(node.value === key){
                result = node.value
                return result
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
            if(node.value === key){
                result = true;
                return result
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
            if(node.value === key){
                result = true;
                list.removeAt(pointer);
                return result
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
        this.capacity = 16;
        const newTable = new Array(this.capacity);
        this.table = newTable
    }


    keys(){
        const keys = [];
        const array = this.table;

        for(let x=0; x<array.length; x++){
            if(array[x]){
                let node = array[x].headNode();

                while(node){
                    keys.push(node.value);
                    node = node.nextNode
                }
            }
        }

        return keys
        
    }
    


    growArray(){
        this.capacity = this.capacity * 2;
        const previousTable = this.table;
        this.table = new Array(this.capacity);

        for(let x=0; x<previousTable.length;x++){
            if(previousTable[x]){
                let node = previousTable[x].headNode();

                while(node){
                    this.set(node.value);
                    node = node.nextNode;
                }
            }
        }
    }
    
}