function materialsReducer(state = '', action){
  switch (action.type) {
    case 'GET_MATERIALS_LIST':
      console.log(state, action.materials)
      return {
      	...state,
      	materials: action.materials
      }
    case 'SET_CURRENT_MATERIAL':
      console.log(state, action.currentMaterial)
    	return {
    		...state,
    		currentMaterial: action.currentMaterial
    	}
    default:
      return state;
  };
};
export default materialsReducer
