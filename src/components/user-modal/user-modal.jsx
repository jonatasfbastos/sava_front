import './user-modal.css'
import user from '../../assets/coordenador.jpg'
import { Link, useHistory } from 'react-router-dom'
import PageWraper from '../../pages/page-wrapper/page-wraper';

const UserModal = ({ show, close }) => {

    const history = useHistory();
    const handleClick = () => history.push('/cadastrar');

    return (
      <>
       {
       show ?
       <div
          className="modal-user-container" 
          onClick={() => close()}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()} >
            <div className="modal-header">
                <div className='user-avatar'>
                    < img src={user} alt="user" />
                </div>
                <div className='user-description'>
                    <span className="modal-header-title"> Paulo Perris </span>
                    <span className="modal-header-email">paulo.perris@ifba.com.br</span>
                </div>
            </div>
            <main className="modal-content">
                <span id="registers">Cadastros</span>
                <div className='register-options'> 
                    <span>Aluno</span>
                        <span component={Link} to="/conselho_de_classe">Professor</span>
                        <span onClick={handleClick}>Turmas</span>
                        <span>Matriz curricular</span>
                        <span>Responsaveis</span>
                    </div>
            </main>
            <footer className="modal_footer">
              <div className="signout" onClick={()=> {localStorage.clear(); window.location.href = '/login';}}>
                    <i class="bi bi-box-arrow-left"></i>
                    <span >
                        Sair da conta
                    </span>
              </div>
            </footer>
          </div>
        </div>
        : null
       }
      </>
    );
  };
  
  export default UserModal;
  