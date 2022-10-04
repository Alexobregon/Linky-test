class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

}

class LinkedListNode {
    constructor(value, next) {
    this.value = value
    this.next = next
    }
}


const ll = new LinkedList()
ll.insertAtHead(10)
ll.insertAtHead(12)



console.log(ll)
