function capsLong(string) {
    if (string.length > 10) {
        return string.toUpperCase();
    } else {
        return string;
    }
}

console.log(capsLong("Hello World"));
console.log(capsLong("Hello"));
console.log(capsLong("Goodbye World"));
console.log(capsLong("Goodbye"));