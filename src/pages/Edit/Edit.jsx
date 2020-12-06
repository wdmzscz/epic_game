import React, {Component} from 'react'
import { Input, Button, Select  } from 'antd';
import {v1 as uuid} from 'uuid';
import './edit.scss';
import 'antd/dist/antd.css';



export default class Edit extends Component{

   constructor(props){
      super(props)
      this.props = props;
      console.log('this is edit props',this.props)
      this.selectValue = '';
      this.disabled = true;
   }

   state={
      disabled:true
   }
   

   
   addItemInList=()=>{
      let textValue = this.textInput.value;
      //add item 
      this.props.addItem({id:uuid(),name:textValue,group:this.selectValue});

      //reset input to empty
      this.textInput.value='';
      this.enableBtn();
   }

   searchItemInList=(value)=>{
      this.props.searchItem(value);
   }

   selectItemInLis=(value)=>{
      this.props.selectItem()
      this.selectValue = value
      console.log('select Value',value)
   }

   enableBtn=()=>{
      let textValue = this.textInput.value;
      let column = this.selectValue
      if(!textValue.trim() || !column.trim()){
         this.setState({
            disabled:true
         })
      }else{
         this.setState({
            disabled:false
         })
      }
   }
   
  
    render(){ 
      const {Search} = Input
      
      const { Option } = Select;
      const {disabled} = this.state
       return(
          <div className='editPanel'>
            <input className='enterInput' onChange={this.enableBtn} placeholder='ENTER ITEM' ref={(textInput)=>{this.textInput = textInput}}/>

            <div className='selectInput'>
               <Input.Group >
                  <Select id='selectInput'  onChange={this.selectItemInLis} onBlur={this.enableBtn} defaultValue="CHOOSE COLUMN">
                     <Option value="col1">COLUMN 1</Option>
                     <Option value="col2">COLUMN 2</Option>
                  </Select>
               </Input.Group>
            </div>
            <Button onClick={this.addItemInList} type="primary" disabled={disabled}>ADD ITEM</Button>

            <div className='selectInput'>
               <p>SEARCH AN ITEM</p>
               <Search placeholder="input search text" style={{backgroundColor:'grey'}} allowClear onSearch={this.searchItemInList} />
            </div>
          </div>
       )
    }
}