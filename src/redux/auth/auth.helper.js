export const checkAuthCredsToCreds = (creds, authCreds) => {
  if(creds.username === authCreds.username && 
    creds.password === authCreds.password
  ) {
    return true
  }

  return false
}

const regex = /[&^$#]/;

export const checkRegex = (password) => {
  return regex.test(password)
};