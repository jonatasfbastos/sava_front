import './login.css'
import React, { Component,useEffect, useState } from "react";
import api from "../../services/api";
import { login } from "../../services/auth";
import logo from '../../assets/logo-white.png'


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const params = new URLSearchParams()


class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };
  

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha o usuario e senha para continuar!" });
    }else{
      params.delete('username');
      params.delete('password');
      
      params.append('username', username)
      params.append('password', password)

      try {
        const response = await api.post("/login", params,config)
        .then((response) => 
          console.log(response.data)
        )
       //login(response.data.token);
  //     this.props.history.push("/login");
      } catch (err) {
        this.setState({
         error:
           "Usuario ou senha incorretos!"
        });
      }
     }
 
  };
  render() {
    return (
      <>
        <div className="container_login">
          <div className="container_logo">
                <div className="logo">
                    <img src = {logo}/>
                </div>
            </div>
        </div>
        <div className="center">        
          <div className="center_data">
            <span><i class="fa bi-lock"></i>Login</span>
            <div className="linha"></div>

          <form onSubmit={this.handleSignIn}>
            {this.state.error && <p>{this.state.error}</p>}
            <div class="ic_user">
              <input
                type="usuario"
                placeholder="Endereço de e-mail"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div class="ic_password">
              <input
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <button type="submit">Entrar</button>
            <a href="#">Esqueceu ou deseja alterar senha?</a>
          </form>
        </div>
        </div>
        </>
    );
  }
}

export default Login;