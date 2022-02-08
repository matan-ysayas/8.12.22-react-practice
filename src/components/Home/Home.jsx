import Massage from "../massage/Massage";
import { useContext } from "react";
import { massageContext } from "../../context/massage-context";
import { showAction } from "../../actions/massage-actions";

const Home = () => {
    const{massage,dispatch}=useContext(massageContext);

    const PlayDispatch=()=>{
        dispatch(showAction({msg:"matan is the men"}))
    }

  return (
    <div>
      <h1>home</h1>
      <Massage/>
      <button onClick={PlayDispatch}>click</button>

    </div>
  );
};
export default Home;
