import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "../../styles/card.scss";

export const Card = props => {
	//Intente usar el store inicialmente para resolver esta parte, pero debido a que no logre manipular
	//los datos desde la API (aunque si los toma), opte por otra forma para mostrar otros aspectos del test.

	/* const { store, actions } = useContext(Context);

	const history = useHistory(); */

	return (
		<div className="col-6 ficha">
			<div className="ficha-body">
				<div className="imagen-label">
					<img className="imgseguro" src={props.imagen} />
					<div className="texto-flotante">
						<label>
							<span className="label-text">{props.cost}</span>
						</label>
					</div>
				</div>
				<div className="texto-bajoimg">
					<h5 className="ficha-title">{props.title}</h5>
					<p className="parrafo">{props.description}</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imagen: PropTypes.string,
	cost: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};
