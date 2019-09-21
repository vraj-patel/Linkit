const initialState = {
    isAddGroupFormOpen: false,
    isAddLinkFormOpen: false,
    isEditGroupFormOpen: false,
    isEditLinkFormOpen: false
}

const formsStatusReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'OPEN_ADD_GROUP_FORM':
          console.log("herehere");
        return {
            isAddGroupFormOpen: true,
            isAddLinkFormOpen: false,
            isEditGroupFormOpen: false,
            isEditLinkFormOpen: false
        };
      case 'OPEN_ADD_LINK_FORM':
        return {
            isAddGroupFormOpen: false,
            isAddLinkFormOpen: true,
            isEditGroupFormOpen: false,
            isEditLinkFormOpen: false
        };
      case 'OPEN_EDIT_GROUP_FORM':
        return {
            isAddGroupFormOpen: false,
            isAddLinkFormOpen: false,
            isEditGroupFormOpen: true,
            isEditLinkFormOpen: false
        };
      case 'OPEN_EDIT_LINK_FORM':
        return {
            isAddGroupFormOpen: false,
            isAddLinkFormOpen: false,
            isEditGroupFormOpen: true,
            isEditLinkFormOpen: false
        };
      case 'CLOSE_FORMS' : 
        return {
            isAddGroupFormOpen: false,
            isAddLinkFormOpen: false,
            isEditGroupFormOpen: false,
            isEditLinkFormOpen: false
        }
        
    }
    return state
}
  
export default formsStatusReducer;