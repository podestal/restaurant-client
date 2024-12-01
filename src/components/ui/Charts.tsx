import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export interface ChartData {
    name: string,
    orders: number
}

interface Props {
    data: ChartData[]
}

// const data = [
//   { name: 'Jan', orders: 30 },
//   { name: 'Feb', orders: 45 },
//   { name: 'Mar', orders: 60 },
// ];

export const OrdersChart = ({ data }: Props) => (
    <ResponsiveContainer>
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#8884d8" />
        </LineChart>
    </ResponsiveContainer>
  );