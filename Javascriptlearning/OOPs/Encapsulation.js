/*class empdetails{

    add(name,id,place){

        this.name=name
        this.id=id
        this.place=place
    }
    showdetails(){
        console.log(this.name);
        console.log(this.id);
        console.log(this.place);
        
        
        
    }
}
const obj=new empdetails()
const obj1=new empdetails()
obj.add("Anju",6,"kkr");      //we should call the first method(first)
obj.showdetails()
obj.add("Anu",6,"blr");
obj.showdetails()*/


class EmpDetails {
    constructor(name, id, place) {
        this._name = name;
        this._id = id;
        this._place = place;
    }

    // SET methods – to assign/update values
    set name(newName) {
        this._name = newName;
    }

    set id(newId) {
        this._id = newId;
    }

    set place(newPlace) {
        this._place = newPlace;
    }

    // GET methods – to read values
    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get place() {
        return this._place;
    }
}

// 👇 Using the class
const emp = new EmpDetails("hanuman", 6, "Kenkera");

console.log(emp.name);   // hanuman
console.log(emp.id);     // 6
console.log(emp.place);  // Kenkera

// 👇 Updating using set
emp.name = "Anjali";
emp.id = 10;
emp.place = "Bangalore";

// 👇 Reading updated values using get
console.log(emp.name);   // Anjali
console.log(emp.id);     // 10
console.log(emp.place);  // Bangalore