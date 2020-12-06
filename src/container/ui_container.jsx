import Ui from '../component/ui';
import {connect} from 'react-redux';
import {searchAction,deleteItemAction,addItemAction, getItemAction} from '../redux/action_creator';

export default connect((state)=>({data:state}),{
    search:searchAction,
    delete:deleteItemAction,
    add:addItemAction,
    get:getItemAction
})(Ui)