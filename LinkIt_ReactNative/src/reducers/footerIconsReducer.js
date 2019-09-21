const initialState = {
    isEditActive: false,
    isAddActive: false,
    isSortActive: false,
}

  const footerIconsReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'SET_FOOTER_ICONS_STATUS':
        return {
            isEditActive: action.isEditActive,
            isAddActive: action.isAddActive,
            isSortActive: action.isSortActive
        }
    }
    return state
  }
  
  export default footerIconsReducer;