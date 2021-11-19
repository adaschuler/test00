import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Seguros } from "../views/seguros";

import { Context } from "../store/appContext";

import "../../styles/todo.scss";

export const Todo = () => {
	return (
		<div className="">
			<div className="seguros container">
				<Seguros />
			</div>
		</div>
	);
};
