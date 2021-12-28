import {connects} from "../index";
import userQuery from "./query";

import {
    encryptPasswordService,
    comparePasswordService
} from "../../helpers/services/index"

import model from "../models/index"

const userDB = userQuery ({connects, model, encryptPasswordService, comparePasswordService})

export default userDB