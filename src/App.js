import React  from 'react'; 
import './App.scss';
import Header from  './pages/Header/header';
import List from './pages/List/list';
import Edit from  './pages/Edit/Edit'


export default class App extends React.Component{

   state = {
      item:{
         col1:[],
         col2:[]
       }
   }

   getColumnData =async ()=>{
      return await new Promise((resolve)=>{
          setTimeout(()=>{
           console.log('fake ajax call')
         },2000);
         resolve()
      });

   }

   loadData=()=>{
      this.getColumnData().then(()=>{
         let data = {
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
            ]
         }
         this.setState({item:data})
      });
   }

   componentDidMount(){
      this.loadData();
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

   searchItem=(value)=>{
      debugger;
      if( typeof value === 'undefined' || value === ''){
         this.loadData()
      }else{
         let {col1,col2} = this.state.item;
         let searchInCol1 = col1.filter((item)=>(
            item.name.indexOf(value) !== -1
         ))
         let searchInCol2 = col2.filter((item)=>(
            item.name.indexOf(value) !== -1
         ));

         this.setState(state=>(
            state.item.col1 = searchInCol1,
            state.item.col2 = searchInCol2
         ))
      }
   }
   
   selectItem=()=>{
      console.log('selectItem')
   }




    render(){
       let {item} = this.state;
       let {col1,col2} = this.state.item
       return(
          <div style={{backgroundColor:'#6c757d'}}>
            <div className='container'>
               <div className='row'>
                  <Header />
               </div>
               <div className='row'>
                  <div className='col-3' style={{backgroundColor:'#6c757d'}}>
                     <Edit  addItem={this.addItem} searchItem={this.searchItem} selectItem={this.selectItem} item={item}/>
                  </div>
                  <div className='col'>
                     <div className='row' >
                        <div className='col'><List  deleteItem={this.deleteItem} item={col1}  /></div>
                        <div className='col'><List  deleteItem={this.deleteItem} item={col2}  /></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
       )
    }
}