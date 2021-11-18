import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<div>
			<div className="dropdown">
				<button
					className="seleccion-boton btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown button
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link className="dropdown-item" href="#">
						Action
					</Link>
					<Link className="dropdown-item" href="#">
						Another action
					</Link>
					<Link className="dropdown-item" href="#">
						Something else here
					</Link>
				</div>
			</div>

			<select className="custom-select">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
	</div>
);
