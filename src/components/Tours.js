import Card from "./Card";
import './Tours.css';
function Tours({tours,removeTour}){
    return(
        <div>
            <div>
                <h2>Plan with Love</h2>
            </div>
            <div>
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>
    );
}

export default Tours;