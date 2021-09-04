const isAllowed = () => {
  if (document.cookie) {
    return true
  } else {
    return false
  }
}

export default isAllowed;