const Animal = (name) => {
	const roar = () => console.log(`${name} says "Roar!"`);
	return {roar};
}

const catFactory = (catName) => {
	const {roar} = Animal(catName);
    const eatFood = () => console.log('eats packet');
	return {roar, eatFood};	
}

const catFullInheritance = (catName) => {
    const prototype = Animal(catName);
    const eatFood = () => console.log('eats packet');
    return Object.assign({}, prototype, {eatFood});
}

const doudou = catFullInheritance('doudou');
doudou.roar();
doudou.eatFood();
