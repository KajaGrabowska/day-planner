export class Task {
    public content: string;
    public category: string;
    public time: string;

    constructor(content: string, category: string, time: string) {
        this.content = content;
        this.category = category;
        this.time = time;
    }
}