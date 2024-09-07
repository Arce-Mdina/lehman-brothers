import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const PieChart = ({ chartData, options }) => {
  return (
    <>
      <Pie data={chartData} options={options}/>
    </>
  )
}

export default PieChart