import { ThemeState } from ".";

export type ThemeAction = 
  | { type: 'SWITCH_THEME' }
  | { type: 'REHYDRATE', payload: ThemeState }

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    
    case 'SWITCH_THEME':
      return {
        ...state,
        mode: state.mode === 'dark' ? 'light' : 'dark' 
      };
      
    case 'REHYDRATE':
      return {...state, ...action.payload};
  }
}