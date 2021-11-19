import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Link } from "react-router-dom";

export const Seguros58 = () => {
	return (
		<div>
			<div className="d-flex justify-content-center">
				<Card
					imagen="https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-01.jpg"
					cost="9000"
					title="Seguro Vida Activa"
					description="Con nuestro Seguro Vida Activa podrás disfrutar el día a día con tranquilidad, 
				gracias al respaldo y apoyo frente a las consecuencias de eventuales accidentes que puedas 
				sufrir. Posee excelente cobertura, un precio muy conveniente y, en caso de fallecimiento, 
				apoyo financiero para tus seres queridos con un capital asegurado."
				/>
			</div>
		</div>
	);
};
