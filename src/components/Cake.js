import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

const Cake = (props) => {
  return (
    <div>
      <h1>Number of cakes = {props.noOfCakes}</h1>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cake);
