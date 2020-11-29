import React, {Component} from 'react';
import {CloseCircleOutlined} from '@ant-design/icons'
import './item.scss';

export default class Item extends Component{

    constructor(props){
        super(props);
        this.props=props;
    }

    deleteItemInList=()=>{
        let {group,id} = this.props
        console.log('item prop',this.props)
        this.props.deleteItem(group,id)
    }



    render(){
       let {name} = this.props;
       return(
            <li className="list-group-item list-group-item-action">{name}
                <span className='icon' onClick={this.deleteItemInList}><CloseCircleOutlined /></span>
            </li>
       )
    }
}