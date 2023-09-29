import "./Chart.css";
import { XAxis, ResponsiveContainer, LineChart, Line, Tooltip, CartesianGrid } from 'recharts';
export default function Chart({title, data, dataKey, grid}){
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytices</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data} >
                {grid && <CartesianGrid strokeDasharray="5 5" />}
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey="uv"></Line>
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}