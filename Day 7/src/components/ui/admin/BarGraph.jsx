import Plot from 'react-plotly.js';

function BarGraph() {
  return (
    <div className="flex items-center p-8 bg-white shadow rounded-lg">
      <center>
      <Plot
        data={[
          {
            x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            y: [10, 12, 15, 8, 20,12, 10], // Adjust data according to your needs
            type: 'bar',
            marker: {
              color: 'b9d2ff', // Adjust color if needed
            },
            textposition: 'outside', // Place labels outside the bars
              textfont: {
                color: 'black', // Adjust label color if needed
              },
          },
        ]}
        layout={{
          width: 200, // Adjust width to fit the box
          height: 100, // Adjust height to fit the box
          margin: { t: 0, b: 0, l: 0, r: 0 }, 
          xaxis: {
              title: {
                text: 'Day',
                standoff: 15, // Distance of the title from the axis
              },
            },
            yaxis: {
              title: {
                text: 'Payments',
                standoff: 15, // Distance of the title from the axis
              },
            },
        }}
      />
      </center>
    </div>
  );
}

export default BarGraph;
