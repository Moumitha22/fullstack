import Plot from 'react-plotly.js';

function PieChart() {
  return (
    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
      <div className="px-6 py-5 font-semibold border-b border-gray-100">Total number of Applicants</div>
      <div className="flex-grow">
      <center>
        <Plot
          data={[
            {
              values: [13, 30, 8], // Values for pending, accepted, rejected applicants
              labels: ['Pending', 'Accepted', 'Rejected'],
              type: 'pie',
              marker: {
                colors: ['#ffe765', '#16a34a', '#e14343'], // Yellow, Green, Red
              },
            },
          ]}
          layout={{
            width: 300,
            height: 300,
            margin: { t: 4, b:0, l: 10, r: 10 }, // Adjust the margin for padding
            // title:"Total number of Applicants"
           
          }}
        />
        </center>
      </div>
    </div>
  );
}

export default PieChart;