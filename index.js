class School{
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level= level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name
  }
    get level(){
    return this._level
  }
    get numberOfStudents(){
    return this._numberOfStudents
  }
  set numberOfStudents(value){
    if(typeof(numberOfStudents)===typeof(0)){
      this._numberOfStudents = value
    }else{
      'Invalid input: numberOfStudents must be set to a Number.'
    }
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    const ranInt = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[ranInt]
  }
}

class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

//primarySchool instances
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

//HighSchool Instances
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.quickFacts();
console.log(alSmith.sportsTeams)