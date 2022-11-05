import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './app'

const auth = getAuth(app)
const formSigin = document.querySelector('#log-in')
formSigin.addEventListener('submit', async (e) => {
  e.preventDefault()
  const emaillogin = formSigin.emaillogin.value
  const passwordlogin = formSigin.passwordlogin.value
  console.log(emaillogin, passwordlogin, auth)
  try {
    const credenciales = await signInWithEmailAndPassword(auth, emaillogin, passwordlogin)
    const user = credenciales.user
    window.location = '../../src/pages/home.html'
    console.log(user)
  } catch (error) {
    console.error('Mal ahí Juan')
    console.log(error)
    console.log(error.code)
  }
})
