import {observable, action} from 'mobx'

export default class Second {
    constructor(main) {
        this.main = main
    }
    @observable second_ob = "2"
    goConsole() {
        console.log("SECOND")
    }
    @action second = () => {
        console.log("SUCCESSS")
    }
}