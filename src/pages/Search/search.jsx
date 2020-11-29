import React, {Component} from 'react'
import { Input, Button,Select  } from 'antd';
import {SearchOutlined } from '@ant-design/icons';
import {v1 as uuid} from 'uuid';
import 'antd/dist/antd.css';



export default class Search extends Component{

   constructor(props){
      super(props)
      this.props = props;
      this.selectValue = 'col1'
   }

   
   addItemInList=()=>{
      //console.log('textinput',this.textInput.value);
      //console.log('props search',this.props)
      let textValue = this.textInput.value;
      let column = this.selectValue

      //add item 
      this.props.addItem({id:uuid(),name:textValue,group:this.selectValue},column);
      //console.log('item after push', this.props.item.item1);
      //reset input to empty
      this.textInput.value='';
   }

   searchItemInList=(value)=>{
      this.selectValue = value
      console.log('select Value',value)
   }

   selectItemInLis=()=>{
      this.props.selectItem()
   }
   
  
    render(){ 
      
      const { Option } = Select;

       return(
          <div>
            <input style={{ width: '30%' }} placeholder='ENTER ITEM' ref={(textInput)=>{this.textInput = textInput}}/>
            <br/>
            <br/>
            <Input.Group compact>
               <Select style={{ width: '30%' }} onChange={this.searchItemInList} defaultValue="CHOOSE COLUMN">
                  <Option value="col1">COLUMN 1</Option>
                  <Option value="col2">COLUMN 2</Option>
               </Select>
            </Input.Group>
            <br/>
            <br/>
            <Button onClick={this.addItemInList} style={{ width: '30%' }} type="primary">ADD ITEM</Button>
            <br/>
            <br/>
            <Input  style={{ width: '30%' }} placeholder="Search" suffix={<SearchOutlined type='search' style={{color:'rgba(0,0,0,.25)'}}/>}/>

          </div>
       )
    }
}