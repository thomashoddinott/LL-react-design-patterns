/* eslint-disable react/display-name */

// nicer way of abstracting out UI from core component
export const inLayout = (Component) => (props) => {
    return (
        <div className="section">div1
            <div className="center-align">div2
                <div className="highlight">div3
                    <Component {...props}/>
                </div>
            </div>
        </div>
    )
};
