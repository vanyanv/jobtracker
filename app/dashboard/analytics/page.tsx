'use client';
import LineChart from '@/app/components/LineChart';

type Data = {
  month: string;
  applications: number;
  offers: number;
  rejections: number;
};

const data: Data[] = [
  { month: 'Jan', applications: 30, offers: 2, rejections: 5 },
  { month: 'Feb', applications: 40, offers: 3, rejections: 8 },
  { month: 'Mar', applications: 35, offers: 1, rejections: 4 },
  { month: 'Apr', applications: 45, offers: 4, rejections: 6 },
];

const lineChartData = {
  labels: data.map((d) => d.month),
  datasets: [
    {
      label: 'Applications',
      data: data.map((d) => d.applications),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: 'Offers',
      data: data.map((d) => d.offers),
      borderColor: 'rgba(75, 192, 192, 0.5)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
    },
  ],
};

export default function Analytics() {
  return (
    <div className='h-screen p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-4xl font-semibold text-gray-900'>Analytics</h1>
        <p className='text-gray-600 mt-2'>
          Track your job search data and insights
        </p>
      </div>
      Overview Cards
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>
            Total Applications
          </h3>
          <p className='text-3xl font-bold text-blue-600 mt-2'>150</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Total Offers</h3>
          <p className='text-3xl font-bold text-green-500 mt-2'>10</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Success Rate</h3>
          <p className='text-3xl font-bold text-purple-500 mt-2'>7%</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Rejections</h3>
          <p className='text-3xl font-bold text-red-500 mt-2'>30</p>
        </div>
      </div>
      {/* Line Chart for Applications Trend */}
      <div className='flex gap-10 flex-wrap'>
        <div className='bg-white p-6 rounded-lg shadow-md mb-6 flex-1 min-w-[300px]'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Monthly Application Trends
          </h2>
          <LineChart data={lineChartData} />
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md mb-6 flex-1 min-w-[300px]'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Monthly Application Trends
          </h2>
          <LineChart data={lineChartData} />
        </div>
      </div>
    </div>
  );
}
