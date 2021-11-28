import './question-item.css';

const QuestionItem = (props) => {

    const {question , options, number, type, toAnswer} = props;

    // const switchTypes = (type) => {
    //     switch(type) {
    //         case 'closed': (
    //             <div className="options">
    //                 {   
    //                     options.map((item, index) => (
    //                         <div className="option">
    //                             <input type="radio" value={item.option} name={item.option}/>{item.option}
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         )
    //         break;
    //         default:
    //             <p>oi</p>
    //     }
    // }

    return (
        
        <div className="question">
            <p>
                {number+1}. {question}
            </p>
            { options && toAnswer? ( 
                <div className="options">
                    {   
                        options.map((item, index) => (
                            <div className="option">
                                <input type="radio" value={item.option} name={item.option}/>
                                {item.option}
                            </div>
                        ))
                    }
                </div> 
            ) : toAnswer ? 
                <div className="opened-question"> 
                    <textarea placeholder="Comente sua resposta ..." />
                </div>
            : null }
        </div>            
    )
}

export default QuestionItem;