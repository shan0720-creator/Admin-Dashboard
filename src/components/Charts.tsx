import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js';
import { Bar, Doughnut, Pie, Line } from 'react-chartjs-2';

// Register all required Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/* ==================== BAR CHART ==================== */
interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export function BarChart({
  data_1,
  data_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = months.slice(0, 7),
  title_1,
  title_2,
}: BarChartProps) {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: 'flex',
        barPercentage: 1,
        categoryPercentage: 0.5,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: 'flex',
        barPercentage: 1,
        categoryPercentage: 0.5,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

/* ==================== DOUGHNUT CHART ==================== */
interface DoughnutChartProps {
  data: number[];
  bgColor: string[];
  labels?: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  labels,
  data,
  bgColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<'doughnut', number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: 'bottom',
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

/* ==================== PIE CHART ==================== */
interface PieChartProps {
  data: number[];
  backgroundColor: string[];
  labels?: string[];
  offset?: number[];
  legends?: boolean;
}

export const PieChart = ({
  labels,
  data,
  backgroundColor,
  offset,
  legends = true,
}: PieChartProps) => {
  const pieData: ChartData<'pie', number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: 'bottom',
        labels: {
          padding: 40,
        },
      },
    },
  };

  return <Pie data={pieData} options={pieOptions} />;
};

/* ==================== LINE CHART ==================== */
interface LineChartProps {
  data: number[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  labels?: string[];
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels = months,
}: LineChartProps) => {
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData: ChartData<'line', number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};