export class Task {
    id: number;
    name: string;
    priority: string;
    description: string;
    done: boolean;

    constructor(id: number, name: string, priority: string, description: string, done: boolean) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.description = description;
        this.done = done;
    }
    makeDone() {
        this.done = true;
    }
    makeToDo() {
        this.done = false;
    }
}