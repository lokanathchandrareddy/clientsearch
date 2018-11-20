import {connect} from 'react-redux';
import ClientList from '../components/ClientList';
import {selectClient } from '../actions/clientAction';

const mapStateToProps = (state) =>  {
    return {
        data: state.client.clients,
        currentProfile: state.client.clients.find((client) => { return client.id === state.client.selectedClient} ) 
    }
} 
const mapDispatchToProps = {selectClient};

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);