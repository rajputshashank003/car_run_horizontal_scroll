import { data } from "../data"
import Car from "./Car"

const ScrollCarPage = () => {
    {/*
        // vertical scroll
        // width should be fit
        // on scroll transition make it x : 400 , x : -400,
        // on scroll rotate tyre contiuously
    */}

    return (
        <div>
            <div className="h-fit">
                <Car data={data.car1}/>
            </div>
            <div className="h-fit">
                <Car data={data.car2}/>
            </div>
        </div>
    )
}

export default ScrollCarPage