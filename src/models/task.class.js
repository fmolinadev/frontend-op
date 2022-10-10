import { PRIORITY } from "./priority.enum"

export class Task {
    name
    description
    complete = false
    priority = PRIORITY.MID

    constructor(name, description, complete, priority) {
        this.name = name
        this.description = description
        this.complete = complete
        this.priority = priority
    }
}