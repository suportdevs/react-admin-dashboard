import "./Home.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import { userData } from "../../utilies/userData";

export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytices" data={userData} dataKey="Active User" grid/>
        </div>
    )
}