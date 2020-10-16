function hello(thing) {
    return "Hello, " + thing.name + "!";
}
document.body.innerHTML = hello({ name: "world" }); // implicit Thing type
