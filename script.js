class Coach {

    constructor(name, spec, rat) {
        this.name = name;
        this.spec = spec;
        this.rat = rat;
    }

   displayInfo() {
    return `Coach: ${this.name} , Specialization: ${this.spec}, Rating: ${this.rat}`;
   }
   
   }
   
   const coach1 = new Coach('John Doe', 'Fitness', 4.7);
   
   const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
   
   console.log(coach1.displayInfo()); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
   
   console.log(coach2.displayInfo()); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"