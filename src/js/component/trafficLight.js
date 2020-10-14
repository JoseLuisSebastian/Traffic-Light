import React, { useState } from "react";
import ReactDOM from "react-dom";

const TrafficLight = () => {
	const [colorSelected, setColorSelected] = useState("");

	let classRed = "red";
	let classYellow = "yellow";
	let classGreen = "green";

	if (colorSelected == "red") {
		classRed = "red selectedRed";
	} else if (colorSelected == "yellow") {
		classYellow = "yellow selectedYellow";
	} else {
		classGreen = "green selectedGreen";
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setColorSelected("red");
				}}
				className={`${classRed} btn btn-circle btn-xl`}
			/>

			<br />

			<button
				type="button"
				onClick={() => {
					setColorSelected("yellow");
				}}
				className={`${classYellow} btn btn-circle btn-xl`}
			/>

			<br />
			<button
				type="button"
				onClick={() => {
					setColorSelected("green");
				}}
				className={`${classGreen} btn btn-circle btn-xl`}
			/>
		</div>
	);
};

export default TrafficLight;
