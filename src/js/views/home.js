import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Seguros } from "../views/seguros";

export const Home = () => (
	<div className="text-center mt-5">
		<div>
			<h1>Escoge tu seguro:</h1>
		</div>
		<div className="seguros">
			<Seguros />
		</div>
	</div>
);
