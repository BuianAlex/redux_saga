import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGetPeople, actionChangeTheme } from '../../actions';
import Main from './Main';

const mapStateToProps = (state: any) => {
  const { peoplesList } = state.peoples;
  return {
    peoplesList: peoplesList || [],
    theme: state.main.theme,
    isWaitResponse: state.main.isWaitResponse
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ actionGetPeople, actionChangeTheme }, dispatch)
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
