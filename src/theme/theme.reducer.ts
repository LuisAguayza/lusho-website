import { ThemeState, ThemeStateEnum } from ".";

export type ThemeAction = 
  | { type: 'SWITCH_THEME' }
  | { type: 'REHYDRATE', payload: ThemeState }

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    
    case 'SWITCH_THEME':
      return {
        ...state,
        mode: state.mode === ThemeStateEnum.DARK ? ThemeStateEnum.LIGHT : ThemeStateEnum.DARK
      };
      
    case 'REHYDRATE':
      return {...state, ...action.payload};
  }
}