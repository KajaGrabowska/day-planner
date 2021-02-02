export class Task {
    //public id: number = 0;
    public content: string;
    public category: string;
    public time: string;
    

    constructor(content: string, category: string, time: string) {
        //this.id = id;
        this.content = content;
        this.category = category;
        this.time = time;
        

    }

    /* setID() {
        if (this.time.length === 4) {
            let sliced = +this.time.slice(0, 1);
            this.id = sliced;
        }
        if (this.time.length === 5 ) {
            let sliced = +this.time.slice(0, 2);
            this.id = sliced;
        }   */  
    //}
}