
		function createElement (name, loc) {
			let option = document.createElement("option");
			let optionTest = document.createTextNode(name);
			option.appendChild(optionTest);
			loc.appendChild(option);
		};
		
		
		// function createOption (target, name) {
		// 	for (let index = 0; index < target.length; index++){
		// 		let element = target[index];
		// 		if (element.name == name ) {
		// 			return element.id;
		// 		}
		// 	}
		// };
	
		// for (let index = 0; index < divisions.length; index++) {
		//  	let element = divisions[index];
		//  	//console.log(element.name);
		// 	let mainDiv = document.getElementById("divition")
		// 	createElement (element.name,element.id,mainDiv);
		// };
		let selectDivId, selectDisId, selectUpozId, selectUnId ;

		function selectDistrict (name) {
			let disDiv = document.getElementById("district");
			disDiv.innerHTML = "";

			fetch("divisions.json")
				.then (Response => Response.json())
				.then(data => {
					for (let index = 0; index < data.length; index++) {
						const element = data[index];
						if (element.name == name) {
							//console.log(element.id)
							selectDivId = element.id
						}
					} 
				})
			
			


			fetch("districts.json")
			.then(Response => Response.json())
			.then (data => {
				const dist = (data[2].data);
				//console.log(dist)
				
				for (let index = 0; index < dist.length; index++) {
					const element = dist[index];
					//console.log(element.division_id)
					if (element.division_id == selectDivId){
						//console.log(element)
						//console.log(element.name)
						createElement (element.name, disDiv)
					}
				}
			})

			
				
			
		};
		

		function selectUpozilla (district_input_name) {
			let upozDiv = document.getElementById("upozilla");
			upozDiv.innerHTML = "";

			fetch("districts.json")
			.then (Response => Response.json())
			.then(data => {
				var data = data[2].data;
				for (let index = 0; index < data.length; index++) {
					const district = data[index];
					if (district.name == district_input_name) {
						//console.log(element.id)
						//console.log(district.id);
						selectDisId = district.id
					}
				} 
			})

			fetch ("upazilas.json")
				.then (Response => Response.json())
				.then(data => {
					let upoz = data[2].data;
					for (let up = 0; up < upoz.length; up++) {
					const element = upoz[up];
					
					//console.log(element)

						if (element.district_id == selectDisId){
							//console.log(element)
							//console.log(element.name)
							createElement (element.name, upozDiv)
						}
					}
				})
		}
	
		function selectUnion (union_input_name) {
			fetch("upazilas.json")
				.then(Response => Response.json())
				.then (data => {
					data = data[2].data;
					for (let index_unpoz = 0; index_unpoz < data.length; index_unpoz++) {
						const element = data[index_unpoz];
						if (element.name == union_input_name) {
							selectUnId = element.id
						}
					}
				})
			
			fetch("unions.json")
				.then(Response => Response.json())
				.then(data => {
					data = data[2].data;
					for (let unions_indes = 0; unions_indes < data.length; unions_indes++) {
						const element = data[unions_indes];
						//console.log(element.name);
						if (element.upazilla_id == selectUnId) {
							//console.log(element)

							let unioDiv = document.getElementById("union");
							createElement(element.name, unioDiv)
						}
						
					}

					
				})
		}