export class Task {
    name: string;
    priority: string;
    description: string;
    done: boolean;

    constructor(name: string, priority: string, description: string, done: boolean) {
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