import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Test de programacion</span>
			</Link>
			<div className="ml-auto">
				<Link to="/seguros58">Seguro Vida Activa</Link> / <Link to="/seguros59">Seguro Viaje Protegido</Link> /{" "}
				<Link to="/todo">Ver todo</Link>
			</div>
		</nav>
	);
};
