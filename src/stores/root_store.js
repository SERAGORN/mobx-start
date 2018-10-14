import First from './first_store'
import Second from './second_store'

export class Root {
    constructor() {
        this.first = new First(this)
        this.second = Second(this)
    }
    rootFunc() {
        console.log("ROOT")
    }
}