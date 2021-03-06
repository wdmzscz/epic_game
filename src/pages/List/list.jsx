import React, {Component} from 'react';
import Item from '../item/item';
import './list.scss';

export default class List extends Component{

   constructor(props){
      super(props);
      this.props=props;
   }


    render(){
       let {item,deleteItem} = this.props
       //console.log('this props',this.props)
       return(
          <div>
            <div className="column" >
               <div className="list-group-item list-group-item-action" style={{textAlign:'center'}}>{item[0]?(item[0].group === 'col1'? 'COLUMN 1':'COLUMN 2'):'Column 1'}</div>
               <ul  className="list-group">
                  {item.map((item)=>{
                     return (
                        <Item key={item.id} {...item} deleteItem={deleteItem}/>
                     )
                  })}
               </ul>
            </div>
          </div>
       )
    }
}