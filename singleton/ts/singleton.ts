class SingletonTS{
    private static instance: SingletonTS;
    random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstace(): SingletonTS{
        if (!this.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singleton  = SingletonTS.getInstace()
const singleton2  = SingletonTS.getInstace()
console.log(singleton)
console.log(singleton2)

singleton.random = 7

console.log(singleton)
console.log(singleton2)
