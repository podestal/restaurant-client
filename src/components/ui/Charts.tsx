import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', orders: 30 },
  { name: 'Feb', orders: 45 },
  { name: 'Mar', orders: 60 },
];

export const OrdersChart = () => (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="orders" stroke="#8884d8" />
    </LineChart>
  );