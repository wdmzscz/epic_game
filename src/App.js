import React  from 'react'; 
import './App.css';
import Header from  './pages/Header/header';
import List from './pages/List/list';
import Search from  './pages/Search/search'


export default class App extends React.Component{

   state = {
      item:{
         col1:[{
            id:'1',
            name:'ITEM1',
            group:'col1'
         },
         {
            id:'2',
            name:'ITEM2',
            group:'col1'
         },
         {
            id:'3',
            name:'ITEM3',
            group:'col1'
         }
         ],
         col2:[{
            id:'4',
            name:'ITEM4',
            group:'col2'
         },
         {
            id:'5',
            name:'ITEM5',
            group:'col2'
         },
         {
            id:'6',
            name:'ITEM6',
            group:'col2'
         }
         ],
      },
   }

   addItem=(itemobj,col)=>{
      //let {item1} = this.state.item
      let itemArray=[...this.state.item[col]];
      itemArray.unshift(itemobj);
      //console.log('item1',itemArray);
      this.setState(state=>(
         state.item[col] = itemArray
      ))
      console.log('setState',this.state);
     
   };

   deleteItem=(group,id)=>{
      console.log('col',group);
      console.log('id',id);
      let itemArray=[...this.state.item[group]];
      let a = itemArray.filter((item)=>(
         item.id !== id
      ))
      this.setState(state=>(
         state.item[group] = a
      ))
   }

   searchItem=()=>{
      console.log('searchItem')
   }
   
   selectItem=()=>{
      console.log('selectItem')
   }




    render(){
       let {item} = this.state;
       let {col1,col2} = this.state.item
       return(
          <div>
            <Header />
            <br/>
            <Search  addItem={this.addItem} searchItem={this.searchItem} selectItem={this.selectItem} item={item}/>
            <br/>
            <List  deleteItem={this.deleteItem} item={col1}   />
            <List  deleteItem={this.deleteItem} item={col2}  />
            <br/>
          </div>
       )
    }
}