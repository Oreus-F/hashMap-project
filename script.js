class HashMap{
    constructor(capacity = 16, loadFactor = 0.75){
        this.capacity = capacity;
        this.loadFactor = loadFactor
    }

    hash(input){
        let hashCode = 0;
        const prime = 31;

        for(let x=0; x < input.length; x++){
            hashCode = (hashCode * prime + input.charCodeAt(x)%2)
        }

        return hashCode
    }
}


const map = new HashMap()

console.log(map.hash('Oreus'))