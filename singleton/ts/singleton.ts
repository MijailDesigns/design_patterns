class SingletonTS{
    private static instance: SingletonTS;
    random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS{
        if (!this.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singleton  = SingletonTS.getInstance()
const singleton2  = SingletonTS.getInstance()
console.log(singleton)
console.log(singleton2)

singleton.random = 7

console.log(singleton)
console.log(singleton2)
