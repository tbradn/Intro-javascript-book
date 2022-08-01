return foo() ? 'bar' : qux();
//refactored to use if statement
if (foo()) {
    return 'bar';
} else {
    return qux();
}