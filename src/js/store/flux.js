import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productsList: [],
			urlProducts: "https://dn8mlk7hdujby.cloudfront.net/interview/insurance/58"
		},
		actions: {
			// Use getActions to call a function within a fuction
			axiosProducts: () => {
				axios.get("https://dn8mlk7hdujby.cloudfront.net/interview/insurance/58").then(result => {
					console.log("resultado", result.data);
					setStore({ productsList: result.data });
				});
			},
			/* axiosProducts: () => {
				const URL = "https://pokeapi.co/api/v2/pokemon/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json()) //Texto plano
					.then(data => setStore({ productsList: data.results })); //Obtienes los datos
			}, */
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
