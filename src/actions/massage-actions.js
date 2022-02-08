import { SUCCESS,PRIMARY,SECONDARY,ERROR,INFO,WARNING,SHOW } from "./massage-types";


export const successAction = (value) => {
  return { type: SUCCESS ,payload:value };
};

export const primaryAction = (value) => {
  return { type: PRIMARY,payload:value  };
};

export const secondaryAction = (value) => {
  return { type: SECONDARY,payload:value  };
};
export const errorAction = (value) => {
  return { type: ERROR,payload:value  };
};
export const infoAction = (value) => {
  return { type: INFO,payload:value  };
};

export const warningAction = (value) => {
  return { type: WARNING,payload:value  };
};

export const showAction=(value)=>{
return{type:SHOW, payload:value}
}
