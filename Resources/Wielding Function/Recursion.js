var categories = {
	name: 'root',
	children: [
		{
			name: 'Art',
			children: [
				{
					name: 'Paint',
					children: [
						{
							name: 'Acrylic'
						},
						{
							name: 'Oil'
						}
					]
				}
			]
		},
		{
			name: 'Computers',
			children: [
				{
					name: 'Laptop'
				},
				{
					name: 'Desktop'
				}
			]
		}
	]
};

function recursiveSearch(tree, name, callback){

	// Check if our current iteration is the one that is desired
	if(tree.name == name){
		callback(tree);
	}

	// Look to see if there are children
	if(tree.children){

		// Iterate through our children
		for (var i = 0; i < tree.children.length; i++) {
			
			// Recursively call our search until we find a match
			recursiveSearch(tree.children[i], name, callback);
		}
	}


}