import React, {Component} from "react";
import './header-button.css';
import MenuBar from "../menu-bar/menu-bar";

export default class HeaderButton extends Component{

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
                            {show ? <MenuBar arr={el.list}/> : null}
                        </div>
                    ))}
            </div>
        );
    }
}