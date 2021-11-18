import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "../../styles/card.scss";

export const Card = props => {
	const { store, actions } = useContext(Context);

	const history = useHistory();

	return (
		<div>
			<div className="ficha">
				<div className="ficha-body">
					<div className="imagen-label">
						<img
							className="imgseguro"
							src="https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-01.jpg"
						/>
						<div className="texto-flotante">
							<label>
								<span className="label-text">label</span>
							</label>
						</div>
					</div>
					<div className="texto-bajoimg">
						<h5 className="ficha-title">
							{props.title}
							Titulo
						</h5>
						<p className="parrafo">Parrafo</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string
	/* description: PropTypes.string,
	cost: PropTypes.string,
	imagen: PropTypes.string,
	id: PropTypes.object */
};
