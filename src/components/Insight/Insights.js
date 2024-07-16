import { useEffect } from 'react';

import '../Insight/Insights.css';

function Insights() {





   

    useEffect(() => {
        document.title = "Explore-Insight";
    }, []);

   


    return (
        <div className="insight-background" >
            <div className="frame">
                <div className="blog">BLOG</div>
                <div className="explore-insight">Explore Insights</div>
                <p className="insight-content">Stay one step ahead with our dedicated latest news update blogs.</p>
                <div className="navigation">
                    <div 
                        className="left-round active" 
                  
                    >
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 2L2 6L7 10" stroke="#272848" strokeWidth="1.725" strokeLinecap="square"/>
                        </svg>
                    </div>
                    <div 
                        className="right-round active" 
                       
                    >
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10L7 6L2 2" stroke="#272848" strokeWidth="1.725" strokeLinecap="square"/>
                        </svg>
                    </div>
                </div>
            </div>
    
        </div>
    );
}

export default Insights;
