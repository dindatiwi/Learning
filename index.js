const menu = {
  _courses: {appetizers: [],
             mains : [],
             desserts: [] },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
this._courses.mains = mainIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
this._courses.desserts = dessertIn;
  },
  get courses(){
    return {appetizers: this.appetizers,
             mains : this.mains,
             desserts: this.desserts
           }
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name:dishName,
      price:dishPrice
    }
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
            const dessert = this.getRandomDishFromCourse('desserts')
            const totalprice = appetizer.price + main.price + dessert.price
            return `Your Total price is ${totalprice} that contains ${appetizer.name} as an appetizer,${main.name} as an main,${dessert.name} as an dessert `
  }
}

menu.addDishToCourse('appetizers','fries',30000)
menu.addDishToCourse('appetizers','eggs',20000)
menu.addDishToCourse('appetizers','burger',54000)

menu.addDishToCourse('mains','steak',90000)
menu.addDishToCourse('mains','nasi padang',30000)
menu.addDishToCourse('mains','ikan goreng',23000)

menu.addDishToCourse('desserts','ice cream',14000)
menu.addDishToCourse('desserts','chocolate',20000)
menu.addDishToCourse('desserts','dalgona',21000)

const meal = menu.generateRandomMeal()
console.log(meal)