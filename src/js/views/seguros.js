import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Link } from "react-router-dom";

export const Seguros = () => {
	//Esta parte no la deje comentada puesto el action y el uso de store quedaron funcionales,
	//Pueden verlo en la consola
	//No supe traerlo al front al tener un ID especifico, no habia trabajado con esa restriccion.

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.axiosProducts();
	}, []);

	return (
		<div>
			<div className="row">
				<Card
					imagen="https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-01.jpg"
					cost="9000"
					title="Seguro Vida Activa"
					description="Con nuestro Seguro Vida Activa podrás disfrutar el día a día con tranquilidad, 
				gracias al respaldo y apoyo frente a las consecuencias de eventuales accidentes que puedas 
				sufrir. Posee excelente cobertura, un precio muy conveniente y, en caso de fallecimiento, 
				apoyo financiero para tus seres queridos con un capital asegurado."
				/>
				<Card
					imagen="https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-02.jpg"
					cost="8000"
					title="Seguro Viaje Protegido"
					description="El Seguro Viaje Protegido cuenta con una cobertura de Muerte Accidental y Asistencia en Viaje, que protege al titular en caso de accidente durante el traslado y periodo del viaje, junto con otorgar servicios de asistencia en viaje tanto para el titular como a sus acompañantes. Contamos con coberturas de USD 60.000 para menores de 85 años y coberturas de USD 150.000 y USD 250.000 para menores de 69 años."
				/>
			</div>
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
			</div>
		</div>
	);
};
