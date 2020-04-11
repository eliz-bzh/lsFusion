import React, {Component} from "react";
import './header.css';
import MenuBar from "../menu-bar/menu-bar";

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    onClicked=()=>{
        this.setState({
            show: !this.state.show
        })
    };

    render() {

        const {show} = this.state;
        const {data} = this.props;
        return(
            <div className="btn-group">
                {
                    data.map(el => (
                        <div>
                            <button className="buttonStyle" onClick={this.onClicked}>
                                <img src={require(`./../ImageResources/${el.img}`)} alt="errorImage"/>
                                <p>{el.data}</p>
                            </button>
                        </div>
                    ))}
            </div>
        );
    }
}