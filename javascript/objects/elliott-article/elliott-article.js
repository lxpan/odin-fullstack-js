const proto = {
    hello: function hello() {
      return `Hello, my name is ${ this.name }`;
    }
  };
  
  // this copies into an empty object the prototype properties, plus 'name' which is an arg used by proto.hello
  // without creating any references between the cloned object and its inherited prototype
  const george = Object.assign({}, proto, {name: 'George'});
  
  const msg = george.hello();
  
  console.log(george);
  console.log(msg); // Hello, my name is George
  
  