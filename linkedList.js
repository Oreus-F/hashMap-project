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
        return this.head !== null ? this.head : null
    }


    tail(){
        let node = this.head;
        let result = node;


        while(node){
            if(node.nextNode === null){
                result = node
            }
            node = node.nextNode
        }

        return result
    }


    at(index){
        let node = this.head;
        let pointer = 0;

        while(node){
            
            if(pointer === index){
                return node
            } else {
                node = node.nextNode;
                pointer++;
            }
        }

        if(node === null){
            return null
        }

    }
    

    pop(){
        let node = this.head;
        let tail = this.tail()

        while(node){
            if(node.nextNode === tail){
                node.nextNode = null
            }
            node = node.nextNode
        }

    }


    contains(value){
        let node = this.head;

        while(node){
            if(node.value === value){
                return true
            }

            node = node.nextNode
        }  
        
        return false
    }


    find(value){
        let node = this.head;
        let index = 0;

        while(node){
            
            if(node.value === value){
                return index
            } else {
                node = node.nextNode;
                index++;
            }
        }

        if(node === null){
            return null
        }
    }


    toString(){

        if(!this.head){
            return;
        }

        let node = this.head;
        let str = "";

        while(node){
            str += `( ${node.value} ) -> `  + ' ';
            node = node.nextNode;
        }

        str += `null`
        return str
    }


    insertAt(value, index){
        
        if(index === 0){
            this.prepend(value);
            return
        }

        const oldSequence = this.at(index);
        const previousNode = this.at(index - 1);
        const newNode = new Node(value);
        
        newNode.nextNode = oldSequence;
        previousNode.nextNode = newNode;
    }


    removeAt(index){


        const nodeToDelete = this.at(index);
        const followingNodes = nodeToDelete.nextNode;

        if(index === 0){
            this.head = followingNodes;
            return    
        }

        const previousNode = this.at(index - 1);

        previousNode.nextNode = followingNodes
    }
}

class Node{
    constructor(value = null, next = null){
        this.value = value,
        this.nextNode = next
    }
}