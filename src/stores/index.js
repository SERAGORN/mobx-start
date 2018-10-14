import First from './first_store'
import Second from './second_store'

export default class Root {
    constructor() {
        this.first = new First(this)
        this.second = new Second(this)
    }
    rootFunc() {
        console.log("ROOT")
    }
    returnRoutes() {
        return {
            first_store: this.first,
            second_store: this.second
        }
    }
}