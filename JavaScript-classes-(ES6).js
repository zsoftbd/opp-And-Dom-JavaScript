//class ES6
//class is a template for creating object

class pasrson{
    constructor(fName,lName,birthday){
        this.firstName = fName;
        this.lastName = lName;
        this.dob = birthday;
    }
    calcolateAge (){
          let birthday=new Date(this.dob);
          let diff=Date.now() - birthday.getTime();
          let ageDate = new Date(diff);
          return Math.abs(ageDate.getFullYear()-1970);
    }
    fullName(){
        console.log(this.firstName,this.lastName)
    }
}
let pasrson1=new pasrson('zea','karim',"10-9-2001")
let pasrson2=new pasrson('md','rasif',"10-5-2002")
let pasrson3=new pasrson('md','takmim',"10-5-2003")

console.log(pasrson1)
console.log(pasrson2)
console.log(pasrson3)

console.log(pasrson1.calcolateAge())
console.log(pasrson2.calcolateAge())
console.log(pasrson3.calcolateAge())

console.log(pasrson1.fullName())
console.log(pasrson2.fullName())
console.log(pasrson3.fullName())