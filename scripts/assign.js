function Foo() {
    this.a = 1
}

function Bar() {
    this.c = 30
}

// Foo.prototype.b = 2
// Bar.prototype.d = 4

// rumus : _.assign(object, [sources])
const assign = _.assign({ 'a': 0, 'b': 40 }, new Foo, new Bar)
console.log(assign)