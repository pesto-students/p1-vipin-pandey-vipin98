let name = {
    firstname: "vipin",
    lastname: "pandey"
}

let printFullname = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state)
}


printFullname.call(name, "Bhopal", "madhya pradesh")

let name2 = {
    firstname: "sachin",
    lastname: "Tendulkar"
}

// function borrowing

printFullname.call(name2, "Mumbai", "Maharastra")

printFullname.apply(name2, ["Mumbai", "Maharastra"])

let printName = printFullname.bind(name2, "Mumbai", "Maharastra")
printName()


//  in call method, we pass arguments individually but
// in apply method we pass arguments as the second argument as an array list


//  bind method looks exactly the same as the call method but
// the only difference is instead of calling that method directly
// bind method binds that method (printFullname) and returns the copy of that method to be call later