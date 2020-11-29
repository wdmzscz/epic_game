import React, {Component} from 'react'
import './header.scss';

export default class Header extends Component{
    render(){
       return(
          <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
               <h1 className="display-4">Marvelous</h1>
               <p className="lead">
                  Lorem Ipsum is simple dummy text of the printing<br/>
                  and type setting industry. Lorem Ipsum has been  <br/>
                  the industry's standard dummy text ever since.
               </p>
            </div>
            </div>
            <header >
               <h1> ADD AN ITEM</h1>
            </header>
          </div>
       )
    }
}