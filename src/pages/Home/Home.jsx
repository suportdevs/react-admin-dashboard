import "./Home.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";

export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    )
}