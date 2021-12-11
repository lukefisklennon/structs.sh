import {
    CURRENT,
    PREV
} from '../util/constants';
import { GraphicalLinkedListNode } from './GraphicalLinkedListNode'
import { LinkedListAnimationProducer } from '../LinkedListAnimationProducer';


export default class GraphicalLinkedList {
    head: GraphicalLinkedListNode;
    length: number;
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(input: number) {
        this.length++;
        const producer = new LinkedListAnimationProducer();
        // Create new node
        const newNode = GraphicalLinkedListNode.from(input);
        producer.addNodeAtEnd(this.length, newNode);

        // Account for case when list is empty
        if (this.head === null) {
            this.head = newNode;
            return producer.timeline;
        }
        
        // Initialise curr
        let curr: GraphicalLinkedListNode = this.head;
        producer.initialisePointer(CURRENT);
        
        // Traverse to last node
        while (curr.next !== null) {
            curr = curr.next;
            producer.moveToNext(CURRENT);
        }
        
        // Link last node to new node
        curr.next = newNode;
        producer.linkLastToNew(curr);

        // Reset positions
        producer.resetList(this);
        return producer.timeline;
    }

    delete(index: number) {
        if (index < 0 || index > this.length - 1) return [];
        this.length--;
        const producer = new LinkedListAnimationProducer();
        let curr = this.head;
        producer.initialisePointer(CURRENT);
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = curr;
            if (prev === this.head) {
                producer.initialisePointer(PREV);
            } else {
                producer.moveToNext(PREV);
            }
            curr = curr.next;
            producer.moveToNext(CURRENT);
        }
        if (prev !== null) {
            prev.next = curr.next;
            if (prev.next === null) {
                producer.setPointerToNull(prev)
            } else {
                producer.morphPointer(prev);
            }
        }
        producer.deleteNode(curr);
        producer.resetList(this);
        return producer.timeline;
    }

    search(value: number) {
        if (this.head === null) {
            return [];
        }
        const producer = new LinkedListAnimationProducer();
        let curr = this.head;
        producer.initialisePointer(CURRENT);
        while (curr !== null && curr.value !== value) {
            curr = curr.next;
            if (curr !== null) {
                producer.moveToNext(CURRENT);
            }
        }
        if (curr !== null) {
            producer.indicateFound(curr);
        }
        producer.resetPointers();
        return producer.timeline;
    }

    insert(value: number, index: number) {
        if (index > this.length - 1) {
            return this.append(value);
        }
        this.length++;
        const producer: LinkedListAnimationProducer = new LinkedListAnimationProducer();
        const newNode: GraphicalLinkedListNode = GraphicalLinkedListNode.from(value);
        producer.createNodeAt(index, newNode);
        let curr = this.head;
        producer.initialisePointer(CURRENT);
        for (let i = 0; i < index; i++) {
            curr = curr.next;
            producer.moveToNext(CURRENT);
        }
        newNode.next = curr.next;
        producer.insertedNodePointToNext(newNode); 
        curr.next = newNode;
        producer.pointToInsertedNode(curr)
        
        producer.resetList(this);
        return producer.timeline;
    }
}
