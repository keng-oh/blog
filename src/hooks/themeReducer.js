// リデューサの定義
export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      localStorage.setItem("darkMode", state.darkMode ? 'off' : 'on')
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      throw new Error();
  }
};
