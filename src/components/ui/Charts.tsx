import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Legend, Bar, Rectangle } from 'recharts';

export interface ChartData {
    name: string,
    quantity: number,
    sales: number
}

interface Props {
    data: ChartData[]
    theme: string
}

const CustomTooltip = ({ active, payload, label, theme }: any) => {
    if (!active || !payload || payload.length === 0) return null;
  
    const isDarkMode = theme === "dark"; // Assume you pass the theme as a prop
  
    return (
      <div
        style={{
          backgroundColor: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#333",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: isDarkMode
            ? "0 4px 6px rgba(0, 0, 0, 0.5)"
            : "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ fontWeight: "bold", margin: 0 }}>{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            style={{
              margin: 0,
              color: entry.color,
              fontSize: "0.9rem",
            }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  };
  

export const OrdersChart = ({ data, theme }: Props) => (
    <ResponsiveContainer>
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip theme={theme}/>}/>
            <Line type="monotone" dataKey="quantity" stroke="#1E88E5" />
            <Line type="monotone" dataKey="sales" stroke="#43A047" />
        </LineChart>
    </ResponsiveContainer>
  );

export const SalesByCategoryBarChart = ({ data, theme }: Props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip theme={theme}/>}/>
            <Legend />
            <Bar dataKey="quantity" fill="#1E88E5" activeBar={<Rectangle fill="#1E88E5" stroke="#1E88E5" />} />
            <Bar dataKey="sales" fill="#43A047" activeBar={<Rectangle fill="#43A047" stroke="#43A047" />} />
          </BarChart>
        </ResponsiveContainer>
      );
}