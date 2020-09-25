let people = [];
let person = {
    name: "Hayden Gibbons",
    School: "MountainLand Techical College",
    phone: "3852217078",
    email: "hayden.c.gibbons@gmail.com",
    printPhone (sep) {
        if(!sep) {
            return `(${this.phone.slice(0,3)}) ${this.phone.slice(3,6)}-${this.phone.slice(6)}`
        } else {
            return `${this.phone.slice(0,3)}${this.phone.slice(3,6)}}`
        }
    }
}
person.printPhone()