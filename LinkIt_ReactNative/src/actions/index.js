import {
    SET_FOOTER_ICONS_STATUS,
    OPEN_ADD_GROUP_FORM,
    CLOSE_FORMS,
    OPEN_ADD_LINK_FORM,
    ADD_GROUP,
    ADD_LINK
} from './actionTypes';

let groupId = 0;
let linkId = 0;

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

export const addGroup = (group) => ({
    type: ADD_GROUP,
    group: {
        ...group, 
        id: 'group' + (++groupId)
    }
})

export const addLink = (link, groupId) => ({
    type: ADD_LINK,
    link: {
        ...link,
        id: 'link' + (++linkId)
    },
    groupId: groupId
})