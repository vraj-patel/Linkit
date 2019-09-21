import {
    SET_FOOTER_ICONS_STATUS,
    OPEN_ADD_GROUP_FORM,
    CLOSE_FORMS,
    OPEN_ADD_LINK_FORM
} from './actionTypes';

export const setFooterIconStatus = (isEditActive, isAddActive, isSortActive) => ({
    type: SET_FOOTER_ICONS_STATUS,
    isEditActive: isEditActive,
    isAddActive: isAddActive,
    isSortActive: isSortActive
})

export const openAddGroupForm = () => ({
    type: OPEN_ADD_GROUP_FORM,
    isAddGroupFormOpen: true,
})

export const openAddLinkForm = () => ({
    type: OPEN_ADD_LINK_FORM,
    isAddLinkFormOpen: true
})

export const closeForms = () => ({
    type: CLOSE_FORMS,
})