import React, { Component } from "react";
import github from "../../img/github.png";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="barra-inferior">
		<p>
			Desarrollado por <img src={github} width="30px" height="30px" />{" "}
			<a href="https://github.com/adaschuler"> Ada Schüler</a>, con dedicacion
		</p>
	</footer>
);
