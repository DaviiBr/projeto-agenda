import 'core-js/stable'; // biblioteca Js, para suportar em navegadores antigos
import 'regenerator-runtime/runtime'; // dependencia do babel, para auxiliar em funcoes assincronas

import Login from './modules/Login'

const login = new Login('.form-login')
const cadastro = new Login ('.form-cadastro')
login.init()
cadastro.init()