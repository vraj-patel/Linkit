/* 

color: '',
links: [],
groupName: '',  
id: ''

*/

  const groupsReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_GROUP' :
        return [
          ...state, action.group
        ];
      case 'ADD_LINK' :
        return state.map(group =>
          group.id === action.groupId ? {...group, links: [...links, action.link] } : group)
    }
    return state
  }
  
  export default groupsReducer;