import React, {Component} from "react";
import './header-button.css';
import MenuBar from "../menu-bar/menu-bar";

export default class HeaderButton extends Component{

    constructor(props) {
        super(props);
        this.state = {
            label: null,
            image: null,
            list: null,
            show: false
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem(){
        const {getData, getImageUrl, getList} = this.props;
        this.setState({label: getData, image: getImageUrl, list: getList});
    }

    onClicked=()=>{
        this.setState({
            show: !this.state.show
        })
    };

    render() {

        const {label, image, list, show} = this.state;
        return(
            <div>
                <button className="buttonStyle" onClick={this.onClicked}>
                    <img src={image} alt="errorImage"/>
                    <p>{label}</p>
                </button>
                {show ? <MenuBar arr={list}/> : null}
            </div>
        );
    }
}

//41
//{show ? <MenuBar arr={list}/> : null}