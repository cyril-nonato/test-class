export const checkAuthCredsToCreds = (creds, authCreds) => {
  if(creds.username === authCreds.username && 
    creds.password === authCreds.password
  ) {
    return true
  }

  return false
}

const regex = /[&^$#]/;

// Checks regex for password
export const checkRegexPassword = (password) => {
  return regex.test(password)
};

const regexUsername = /^[a-zA-Z0-9]+$/;

// Checks regex for username
export const checkRegexUsername = (username) => {
  return regexUsername.test(username)
}