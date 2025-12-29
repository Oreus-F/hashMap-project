export class LinkedList{
    constructor(){
        this.head = null
    }


    
    append(value, node = this.head){

        if(node === this.head && node === null){
            this.head = new Node(value)
            return
        }

        if(node.nextNode === null){
            node.nextNode = new Node(value)
            
        } else {
            let temp = node.nextNode;
            return this.append(value, temp)
        }

    }

    prepend(value){
        if(this.head === null){
            this.head = new Node(value)
        } else {
            const temp = this.head
            const newValue = new Node(value);
            newValue.nextNode = temp
            this.head = newValue
        }
    }

    size(){
        let size = 0;

        let node = this.head;

        while(node){
            size++;
            node = node.nextNode
        }

        return size
    }


    headNode(){
        if(this.head !== null){
            return this.head
        } else {
            return new Error('This list has no data')
        }
    }


    tail(){
        let node = this.head;
        let result;

        if(node === null){
            return new Error('This list has no data')
        }

        while(node){
            if(node.nextNode === null){
                result = node
            }
            node = node.nextNode
        }

        return result
    }


    at(index){
        // return the node at the specific index
        // throw error if no data or if no node at the specific index
    }


    printTest(){

        if(!this.head){
            return;
        }

        let node = this.head;
        let str = "";

        while(node){
            str += node.value + ' ';
            node = node.nextNode;
        }

        return str
    }
}

class Node{
    constructor(value = null, next = null){
        this.value = value,
        this.nextNode = next
    }
}
