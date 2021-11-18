import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Seguros = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.axiosProducts();
	}, []);

	return (
		<div>
			<div>
				{/* {store.productsList.map((item, index) => {
					return (
						<Card
							key={index}
							title={store.productsList.name}
							description={item.description}
							cost={item.price}
							imagen={item.image}
							id={index}
						/>
					);
				})} */}
				<Card title={store.productsList.DESCRI} />
				{/* {store.productsList.name} */}
			</div>
		</div>
	);
};
