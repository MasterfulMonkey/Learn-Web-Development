interface Thing
{
    name: string;
}

function hello(thing: Thing): string
{
    return `Hello, ${thing.name}!`;
}

document.body.innerHTML = hello({name: "world"}); // implicit Thing type