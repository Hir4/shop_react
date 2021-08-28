import jwt from 'jsonwebtoken';

const isAllowed = () => {
  if (document.cookie) {
    const cookie = document.cookie;
    const cookieDecoded = jwt.decode(cookie);
    console.log(cookie);
    console.log(cookieDecoded);
    console.log("entrou");
    return true
  } else {
    console.log("nao entrou")
    return false
  }
}

export default isAllowed;