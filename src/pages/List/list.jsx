import React, {Component} from 'react';
import Item from '../item/item';
import './list.css';

export default class List extends Component{

   constructor(props){
      super(props);
      this.props=props;
   }


    render(){
       let {item,deleteItem} = this.props
       return(
          <div>
            <div className="row">
               <div className="column" style={{ backgroundColor: '#aaa' }}>
                  <ul>
                    {item.map((item)=>{
                       return (
                          <Item key={item.id} {...item} deleteItem={deleteItem}/>
                       )
                    })}
                  </ul>
               </div>
            </div>
          </div>
       )
    }
}