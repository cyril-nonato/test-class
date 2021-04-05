export const checkAuthCredsToCreds = (creds, authCreds) => {
  if(creds.username === authCreds.username && 
    creds.password === authCreds.password
  ) {
    return true
  }

  return false
}

const regex = /[&^$#]/;

// Checks regex if it passes
export const checkRegex = (password) => {
  return regex.test(password)
};