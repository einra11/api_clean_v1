import {connects} from "../index";
import bookQuery from "./query";


import model from "../models/index"

const bookDB = bookQuery ({connects, model})

export default bookDB