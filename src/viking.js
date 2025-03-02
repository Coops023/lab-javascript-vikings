// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  attack() {
    return this.strength
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;

    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`
    }
    else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }

  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
    } else if (this.health <= 0) {
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj)
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)
  }
  vikingAttack() {
    let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    return saxonRandom.receiveDamage(vikingRandom.strength)

  }
  saxonAttack() {
    let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    return vikingRandom.receiveDamage(saxonRandom.strength)
  }
  showStatus() { }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
