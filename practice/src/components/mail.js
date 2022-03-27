import React, { Component } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import DataSharing from "./datasharing";
import HeaderComp from "./header";
import InboxComp from "./inbox";
import OutboxComp from "./outbox";
import SendComp from "./send";
import TrashComp from "./trash";

class MailComp extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            comments : ""
        }
    }

    onDataHandle = (name, value) => {
        console.log(name, value);
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <DataSharing.Provider value={{
                onTensferData : this.onDataHandle,
                fromData : {...this.state}
            }}>
                <BrowserRouter>
                    <div className="wrapper1">
                        <div className="header1">
                            <HeaderComp></HeaderComp>
                        </div>
                        <div className="body1">
                            <div className="sidebar1">
                                <NavLink to="inbox">Inbox</NavLink>
                                <NavLink to="outbox">Outbox</NavLink>
                                <NavLink to="send">Send</NavLink>
                                <NavLink to="trash">Trash</NavLink>
                            </div>
                            <div className="content1">
                                <Routes>
                                    <Route path="inbox" element={<InboxComp />}></Route>
                                    <Route path="outbox" element={<OutboxComp />}></Route>
                                    <Route path="send" element={<SendComp />}></Route>
                                    <Route path="trash" element={<TrashComp />}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter >
            </DataSharing.Provider>
        )
    }
}

export default MailComp