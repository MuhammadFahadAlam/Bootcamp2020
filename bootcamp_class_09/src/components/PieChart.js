import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			data: [30, 50, 100],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
		},
	],
};

function PieChart() {
	return (
		<div>
			<h2>Pie Example</h2>
			<Pie data={data} height={150} />
		</div>
	);
}

export default PieChart;
