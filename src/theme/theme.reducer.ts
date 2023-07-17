import { DARK_THEME_STATE, LIGHT_THEME_STATE, ThemeState } from ".";

export type ThemeAction = 
  | { type: 'SWITCH_THEME' }
  | { type: 'REHYDRATE', payload: ThemeState }

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    
    case 'SWITCH_THEME':
      return {
        ...state,
        mode: state.mode === DARK_THEME_STATE ? LIGHT_THEME_STATE : DARK_THEME_STATE
      };
      
    case 'REHYDRATE':
      return {...state, ...action.payload};
  }
}