class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title
  }
   get isCheckedOut(){
    return this._isCheckedOut
  }
   get ratings(){
    return this._ratings
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum/this.ratings.length
  }
  addRating(value){
    this.ratings.push(value)
  }
}

class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
    get author(){
    return this._author;
  }
      get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
}
//Book instances
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log("this is historyOfEverything : " + historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log("this is the average rating of historyOfEverything : "+historyOfEverything.getAverageRating())

//Movie Instances
const speed = new Book('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log("this is speed : " +speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log("this is the average rating of speed : "+speed.getAverageRating())