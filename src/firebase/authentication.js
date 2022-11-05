import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './app'

const auth = getAuth(app)
const formLogin = document.querySelector('#form-sing-in')

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = formLogin.email.value
  const password = formLogin.password.value
  console.log(email, password, auth)

  try {
    const credenciales = await createUserWithEmailAndPassword(auth, email, password)
    console.log(credenciales, auth, credenciales.user)
    window.location = '../pages/home.html'
  } catch (error) {
    console.error('Mal ahí Nath')
  }
})
