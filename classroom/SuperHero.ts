// Define an SuperHero class
class SuperHero {
  name: string;
  isEvil: boolean;

  constructor(name: string, isEvil: boolean) {
    this.name = name;
    this.isEvil = isEvil;
  }

  selfIntroduce() {
    console.log(`I am ${this.name} and I will ${this.isEvil ? 'rule the world' : 'protect the peace'}.`);
  }
}

const JeanGrey = new SuperHero('Jean Grey', true);
const Batman = new SuperHero('Bastman', false);

JeanGrey.selfIntroduce();
Batman.selfIntroduce();

class DoctorStrange extends SuperHero {
  constructor() {
    super('Doctor Strange', false);
  }

  usePower() {
    console.log('Time is stopped.');
  }
}

const strange = new DoctorStrange();
strange.selfIntroduce();
strange.usePower();
