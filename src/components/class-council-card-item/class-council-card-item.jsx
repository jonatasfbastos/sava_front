import react from "react";
import './class-council-card-item.css';

const ClassCouncilCardItem = (props) => {
    const {subject, classYear, isOpened, quarter} = props;

    return(
        <div className="card-item-container">
            <div className={`card-top ${isOpened ? "" : "closed"}`}>
                <div className="card-top-content">
                    <div className="card-top-header">
                        <span>{subject}</span>
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>
                    <span>{classYear}</span>
                </div>
            </div>    
            <div className="card-body">

            </div>
            <div className="card-bottom">
                <div className="card-bottom-content">
                    <div className={`status is-${isOpened ? "opened" : "closed"}`} >
                        <i class="bi bi-circle-fill"></i>
                        <span>{`${isOpened ? "Aberto" : "Fechado"}`}</span>
                    </div>
                    <div className="card-quarter">
                        <span>{quarter}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default ClassCouncilCardItem;