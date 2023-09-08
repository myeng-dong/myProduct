function Person(){
    let name;
    let age;
}

Person.prototype.smile = function(){
    console.log('smile');
}

function smile(){
    console.log('smile');
}

const p1 = new Person();
p1.name = 'men1';
p1.age = 30;



// console.log(p1.name, p1.age);
p1.smile();