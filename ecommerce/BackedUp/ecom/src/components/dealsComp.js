import React, { Component } from 'react';

class DealsComp extends Component {
    render() { 
        let dealsmap = this.props.dealsList.map((value, index) => {
            return (

                <div className="maindeals" key={index}>
                    <div className="sub1deals">
                        <div className="sub3">
                            {/* <h3>Deals of the day</h3> */}
                            <h3>{value.first_name}</h3>
                        </div>
                        <div className="sub4">
                            <button className="sub44" type="button">VIEW ALL</button>
                        </div>
                    </div>
                    <div className="sub2deals">
                        <img src={value.avatar} alt="imglist"></img>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {dealsmap}
            </div>
        );
    }
}

export default DealsComp;