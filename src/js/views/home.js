import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Home = () => {
	const referencia = React.createRef();

	function seleccion() {
		console.log("Hola:", referencia);
		//Funcion que pase el value como una URL segun lo escogido, en este momento la funcion se ejecuta,
		//pero queda en form.select. Ver opciones.
	}

	return (
		<div className="container text-center mt-5">
			<div className="d-flex justify-content-center">
				<Form className="contact-form center col-xs-10 col-sm-8 col-md-4 mt-3 mb-5">
					<Form.Select id="estilos-selector" ref={referencia} aria-label="Default select example">
						<option className="conocer">Conocer seguros</option>
						<option className="conocer" value="/seguros58">
							Seguro Vida Activa
						</option>
						<option className="conocer" value="/seguros59">
							Seguro Viaje Protegido
						</option>
					</Form.Select>
					<Button className="seleccion-boton mt-3" variant="primary" type="submit" onClick={seleccion}>
						Mas
					</Button>
				</Form>
			</div>
		</div>
	);
};
