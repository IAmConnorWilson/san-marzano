/* eslint-disable import/prefer-default-export */
type GlobalStateType = {
  isSidebarOpen: boolean;
};

export const initialGlobalState: GlobalStateType = {
  isSidebarOpen: false,
};

export enum GlobalActionType {
  SET_SIDEBAR_STATE = 'SET_SIDEBAR_STATE',
}

export type GlobalAction = {
  type: GlobalActionType;
  data?: {
    isSidebarOpen?: boolean;
  };
};

// Missing type saftey?
export const globalReducer = (state = initialGlobalState, action: GlobalAction) => {
  switch (action.type) {
    case GlobalActionType.SET_SIDEBAR_STATE:
      return {
        ...state,
        isSidebarOpen: Boolean(action.data?.isSidebarOpen),
      };
    default:
      return state;
  }
};

export const globalActions = {
  setSidebarState: (isSidebarOpen: boolean) => {
    return { type: GlobalActionType.SET_SIDEBAR_STATE, data: { isSidebarOpen } };
  },
};
