import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Home = () => (
	<div className="container text-center mt-5">
		<div className="d-flex justify-content-center">
			<Form className="contact-form center col-xs-10 col-sm-8 col-md-4 mt-3">
				<Form.Select id="estilos-selector" aria-label="Default select example">
					<option id="conocer">Conocer seguros</option>
					<option value="/seguros58">Seguro Vida Activa</option>
					<option value="/seguros59">Seguro Viaje Protegido</option>
				</Form.Select>
				{/* <Form.Control value="select" onChange="" type="select" /> */}
				{/* <Form.Control className="mt-3 seleccion-boton" type="submit" onClick="" /> */}
				<Button ClassName="seleccion-boton" variant="primary" type="submit">
					Mas
				</Button>
			</Form>
		</div>
	</div>
);
