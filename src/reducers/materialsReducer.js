function materialsReducer(state = '', action){
  switch (action.type) {
    case 'GET_MATERIALS_LIST':
      return {
      	...state,
      	materials: action.materials
      }
    case 'SET_CURRENT_MATERIAL':
    	return {
    		state,
    		currentMaterial: action.currentMaterial
    	}
    default:
      return state;
  };
};
export default materialsReducer
