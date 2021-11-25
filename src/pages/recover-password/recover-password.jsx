import './recover-password.css';

const RecoverPassword = () => {
    return(
        <>
            <div className="container_login">
                <div className="container_logo">
                </div>
            </div>
            <div className="center">
                <div className="center_data">
                    <span>Recuperação de senha</span>
                    <div className="linha"></div>

                    <div className="email">
                        <span>Senha:*</span>
                        <input type="text" name="" id="" placeholder=""/>
                    </div>
                    <span className="descricao">Digite a nova senha</span>
                    
                    <input type="text" className="confirmacao" placeholder=""/>
                    <span className="descricao">Confirme a nova senha</span>

                    <button>Enviar</button>
                </div>
            </div>
        </>
    )
}

export default RecoverPassword