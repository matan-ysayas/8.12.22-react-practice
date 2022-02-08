import { useContext } from "react";
import {successAction} from "../../actions/massage-actions";
import { massageContext } from "../../context/massage-context";


const Massage=()=>{

    
const{massage,dispatch}=useContext(massageContext);

    const DispatchSuccess=()=>{
        dispatch(successAction());
    }
   if(massage.isOpen==true){

    return(<div>
        <h1>Massage component    </h1>
       <h1>{massage.msg}</h1>
       
    <button onClick={DispatchSuccess}>click Success</button>

    </div>)
    }else return (<div>

    </div>)
}
export default Massage;