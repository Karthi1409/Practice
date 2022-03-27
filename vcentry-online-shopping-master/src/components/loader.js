import React, { Component } from 'react';

class LoaderComponent extends Component {
    render() {
        return (
            <div>
                <img src={require("../images/loader.gif").default} alt="Loading" className="center-img"
                    style={{ width: this.props.size.width, height: this.props.size.height }} />
            </div>
        );
    }
}

export default LoaderComponent;