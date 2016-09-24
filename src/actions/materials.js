export const initMap = (markers) => {
	return (dispatch, getState) => {
		const state = getState();
		dispatch(fetchedMarkers(markers));
	};
};

export const fetchedMarkers = (markers) => {
	return{
		type: ACTIONS.FETCHED_MAP,
		markers: markers
	};
};

export const ACTIONS = {
	FETCHED_MAP : "FETCHED_MAP",
};

export const fetchedMaterialsList = (list) => {
  return {
    type: 'GET_MATERIALS_LIST',
    materials: list
  };
};

export const setCurrentMaterial = (material) => {
	return {
		type: 'SET_CURRENT_MATERIAL',
		currentMaterial: material
	}
}


export function getMaterialsList(){
 	return (dispatch, getState) => {

 	    //Fetch state
 	    const state = getState()

 	    var dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu arcu nec risus varius fringilla scelerisque quis tortor. Mauris eget accumsan libero, eget aliquet nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse tincidunt est libero, vel porttitor lacus lacinia sit amet. Mauris mauris augue, sodales et metus non, condimentum dapibus nisl. Cras efficitur ipsum non facilisis mattis. Morbi auctor id nisi pulvinar euismod. Morbi pharetra dolor eget imperdiet ornare. In hac habitasse platea dictumst. Duis congue in libero at varius. Donec egestas, lacus eget consequat molestie, nisi dui tristique elit, non ornare nibh ipsum vel ex. Sed id mauris quis nisl laoreet laoreet. Morbi dictum faucibus lacinia. Quisque vel nulla dictum, commodo quam quis, pulvinar mauris.";

 	    var list = [
	 	    {
	 	    	name: 'paper',
	 	    	types: [
	 	    		{
	 	    			type: 'Office Paper',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Magazines',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Newspaper',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Phonebooks',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Paperboard',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Direct/Junk Mail',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'cardboard',
	 	    	types: [
	 	    		{
	 	    			type: 'Corrugated Cardboard',
	 	    			description: null,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Cardboard Boxes',
	 	    			description: null,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'plastics',
	 	    	types: [
	 	    		{
	 	    			type: 'Plastic Bottles',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Grocery Store Bags',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'aluminum',
	 	    	types: [
	 	    		{
	 	    			type: 'Aluminum Cans',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Aluminum Foil',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'steel/tin',
	 	    	types: [
	 	    		{
	 	    			type: 'Steel Cans',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Tin Cans',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'glass',
	 	    	types: [
	 	    		{
	 	    			type: 'Glass Bottles',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Other Glass Containers',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'ink cartridges',
	 	    	types: [
	 	    		{
	 	    			type: 'Printer Cartridges',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'batteries',
	 	    	types: [
	 	    		{
	 	    			type: 'Household Batteries',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Car Batteries',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'oil',
	 	    	types: [
	 	    		{
	 	    			type: 'Cooking Oil',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Car Oil',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    },
	 	    {
	 	    	name: 'electronics',
	 	    	types: [
	 	    		{
	 	    			type: 'Computers',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Monitors',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Televisions',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Microwaves',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		},
	 	    		{
	 	    			type: 'Other Appliances',
	 	    			description: dummyText,
	 	    			tutorial: [
	 	    				''
	 	    			]
	 	    		}
	 	    	]
	 	    }
 		]

 		dispatch(fetchedMaterialsList(list));
 	}
}
