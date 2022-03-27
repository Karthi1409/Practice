import React , { Component } from 'react';


class LatestComp extends Component {

    render() {
        return(
            <div className="maincontent-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title fw-bold">{this.props.displayMessage}</h2>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LatestComp;