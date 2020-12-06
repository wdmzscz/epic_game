import Ui from '../component/ui';
import {connect} from 'react-redux';
import {searchAction} from '../redux/action_creator';

export default connect((state)=>({item:state}),{
    search:searchAction
})(Ui)