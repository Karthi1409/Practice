import React, { Component } from "react";
import DataSharing from "./datasharing";

class HeaderComp extends Component {


    onHandelHeader = (event) => {
        this.context.onTensferData(event.target.name , event.target.value)
    }

    render() {
        return (
            <DataSharing.Consumer>
                {
                    (context) => {
                        // console.log(context.fromData)
                        return (
                            <div className="headercomp1">
                                <h1>This is a Header Component</h1>
                                <input name="comments" type="text" placeholder="Enter Comment" onChange={this.onHandelHeader}></input>
                            </div>
                        )
                    }

                }
            </DataSharing.Consumer>
        )
    }
}
HeaderComp.contextType = DataSharing;
export default HeaderComp;