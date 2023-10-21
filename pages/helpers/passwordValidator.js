export function passwordValidator(password) {
  if (!password) return "Ooops! We need a valid Password address."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  return ''
}
