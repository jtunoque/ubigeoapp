import { connect } from "react-redux";
import UbigeosView from "../Components/UbigeosView";

const mapStateToProps = state => {
  return {
    departamentos: state.ubigeosDep,
    provincias: state.ubigeosProv,
    distritos:state.ubigeosDist,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const UbigeosViewContainer = connect(mapStateToProps, mapDispatchToProps)(UbigeosView);

export default UbigeosViewContainer;
