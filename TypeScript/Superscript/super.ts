class Person
{
    public fullName: string = "";

    public constructor(public firstName: string, public middleInitial: string, public lastName: string)
    {
        this.updateName();
    }

    public updateName(): void
    {
        this.fullName = `${this.firstName} ${this.middleInitial}. ${this.lastName}`;
    }
}

function supsup(line: string[], end: string = ""): string // creates "rescursive" superscripting
{
    for(let i = 0; i<line.length; i++)
        end += `</sup>`;

    return `${line.join(` <sup>`)}${end}`;
}

function greeter(person: Person): string
{
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

function question(person: Person): string
{
    person.middleInitial = `<i>${person.middleInitial}</i>`;
        person.updateName();
    
    return supsup((`<sup>...Or are you really ${person.fullName}?`).split(' '));
}

let user = new Person("John", "C", "Doe");

document.body.innerHTML = `<font size=6>${greeter(user)}${question(user)}</font>`;