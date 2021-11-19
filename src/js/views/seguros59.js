import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Link } from "react-router-dom";

export const Seguros59 = () => {
	return (
		<div>
			<div className="d-flex justify-content-center">
				<Card
					imagen="https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-02.jpg"
					cost="8000"
					title="Seguro Viaje Protegido"
					description="El Seguro Viaje Protegido cuenta con una cobertura de Muerte Accidental y Asistencia en Viaje, que protege al titular en caso de accidente durante el traslado y periodo del viaje, junto con otorgar servicios de asistencia en viaje tanto para el titular como a sus acompañantes. Contamos con coberturas de USD 60.000 para menores de 85 años y coberturas de USD 150.000 y USD 250.000 para menores de 69 años."
				/>
			</div>
		</div>
	);
};
