import { SUCCESS,PRIMARY,SECONDARY,ERROR,INFO,WARNING } from "../actions/massage-types";

export const massageReducer = (state, action) => {
  switch (action.type) {
    case "success":
      return SUCCESS;

    case "primary":
      return PRIMARY;

    case "secondary":
      return SECONDARY;

    case "error":
      return ERROR;

    case "warning":
      return WARNING;

      case "info":
          return INFO;

          case "show":
            return state={...action.payload,isOpen:true};


    default:
      return state;
  }
};
