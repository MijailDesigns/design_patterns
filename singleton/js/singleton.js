class Singleton{

    static getInstance(){
        return Singleton.instance;
    }

    constructor(){
        this.random = Math.random();
        // console.log("entrando a constructor");
        if(Singleton.instance){
            // console.log("ya existe");
            return Singleton.instance;
        }
        // console.log("no existe y se crea");
        Singleton.instance = this;
    }
}

// const singleton = new Singleton();
// const singleton2 = new Singleton();
// const singleton3 = Singleton.getInstance()
// console.log(singleton.random);
// console.log(singleton2.random);
// console.log(singleton3.random);
// console.log(singleton === singleton2);
// console.log(singleton3 === singleton2);

class WeekDays{
    daysEs = ["Lunes",
    "Mates",
    "Miercoles",
    "Jueves",
    "Viernes", 
    "Sabado",
    "Domingo"];
    
    daysEn = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]

    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays(){
        return this.lang === "es" ?
            this.daysEs :
            this.daysEn;
    }
}


const week1 = new WeekDays("en");
const week2 = new WeekDays("en");
const week3 = new WeekDays("es");
console.log(week1.getDays())
console.log(week2.getDays())
console.log(week3.getDays())