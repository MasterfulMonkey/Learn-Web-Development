var Person = /** @class */ (function () {
    function Person(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = String.empty;
        this.updateName();
    }
    Person.prototype.updateName = function () {
        this.fullName = this.firstName + " " + this.middleInitial + ". " + this.lastName;
    };
    return Person;
}());
function supsup(line, end) {
    if (end === void 0) { end = ""; }
    for (var i in line)
        end += "</sup>";
    return "" + line.join(" <sup>") + end;
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
function question(person) {
    person.middleInitial = "<i>" + person.middleInitial + "</i>";
    person.updateName();
    return supsup(("<sup>...Or are you really " + person.fullName + "?").split(' '));
}
var user = new Person("John", "C", "Doe");
document.body.innerHTML = "<font size=6>" + greeter(user) + question(user) + "</font>";
