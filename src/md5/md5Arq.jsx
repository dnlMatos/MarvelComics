import md5 from "md5";
import time from "../constants/Time";
import PrivKey from "../constants/PrivKey";
import PubKey from "../constants/PubKey";

const hash = md5(time + PrivKey + PubKey);

export default hash
