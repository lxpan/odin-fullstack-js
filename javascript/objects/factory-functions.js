const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const getHealth = () => health;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName, getHealth};
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  // jimmie.attack(badGuy);

  // jimmie.die() // wouldn't work (is 'private')
  console.log(jimmie.getHealth());
  console.log(badGuy.getHealth());
  jimmie.health -= -1000; // not operable in its current scope
  console.log(jimmie.health);
