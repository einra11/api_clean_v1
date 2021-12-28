import {connects} from "../index";
import userQuery from "./query";

import model from "../models/index"

const userDB = userQuery ({connects, model})

export default userDB