function greeter(person: string = "hello") {
    return "Hello, " + person;
}

let user = 'user ABC';

document.body.textContent = greeter(user);