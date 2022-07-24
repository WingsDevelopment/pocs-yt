class Hero {
    constructor(
        name,
        health,
        spell,
        weapon,
        armor,
        level,
        gold,
        mana,
        range,
        damage,
    )
}

class Mirana extends Hero {
    constructor() {
        super(
            name = 'Mirana',
            health = 17,
            spell = arrowSpell,
            weapon = basicBow,
            armor = basicArmor,
        )
    }
}

const arrowSpell = "Arrow: Deals 6 damage, max range of 5, mana cost 3, stuns target for 1 turn";
const basicBow = "Basic Bow: Damage: 3*, Max Range: 3";
const basicArmor = "Basic Armor: Defense: 1*";

const armorType = {
    Water: 'Water',
    Fire: 'Fire',
    Darkness: 'Darkness',
    Nature: 'Nature', 

    Divine: 'Divine', //od svih prima 85%
    Normal: 'Normal', //od svih prima 115%
}