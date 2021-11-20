import './question-item.css';

const QuestionItem = (props) => {

    const {question , options, number, type} = props;

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
        
        <div className="container-item">
            <div className="question">
                <p>
                    {number+1}. {question}
                </p>
                { options ? ( 
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
                ) : 
                    <div className="opened-question"> 
                        <textarea />
                    </div>
                }
               

                {/* {switchTypes(type)} */}
                {/*s
                <div className="options">
                    {   
                       
                        options.map((item, index) => (
                            <div className="option">
                                <input type="radio" value={`${item.option}`}    name={`${item.option}`}/>{item.option}
                            </div>
                        ))
                    }
                </div> */}
            </div>
        </div>
            
    )
}

export default QuestionItem;