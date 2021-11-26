import './login.css'
import logo from '../../assets/logo-white.png'


export default function Login(){
    return(
        <>
            <div className="container_login">
                <div className="container_logo">
                    <div className="logo">
                        <img src = {logo}/>
                    </div>
                </div>
            </div>y
            <div className="center">
                <div className="center_data">
                    <span><i class="fa bi-lock"></i>Login</span>
                    <div className="linha"></div>
                    <div class="ic_user">
                        <input type="text" name="" id="" placeholder="Usuário"/>
                        <i class="bi bi-person-fill"></i>
                        </div>
                    <div class="ic_password">
                        <input type="password" name="" id="" placeholder="Senha"/>
                        <i class="bi bi-key-fill"></i>
                        </div>
                    <button>Acessar</button>
                    <a href="#">Esqueceu ou deseja alterar senha?</a>
                </div>
            </div>
        </>
    )
}