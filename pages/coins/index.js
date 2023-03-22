// FETCHING DATA IN NEXT JS (using axios)
// you can view this page by typing at end of URL /coins bc of how we named our file
import Axios from "axios"

const CoinList = ({coinData}) =>{
    console.log(coinData)

    return(
        <div>
            {coinData.coins.map((coin) =>{
                return( 
                    <div>
                        <h4>{coin.name}</h4>
                        <img src={coin.icon} style={{width: "100px"}}/>
                        <p>{coin.price}</p>
                    </div>
                );
            })}

        </div>
    )
}

export const getStaticProps = async ({params}) => {
    const id = params.id;
    const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0");
    return{
        props: {
            coinData: data.data
        },
        revalidate: 100
        // will regenerate the page every how many seconds, but if its consistently changing data
        // like sports game info thats constantly changing, then use getServerSideProps
    }
}
// getStaticProps returns data and set props of component for component to use data
// BEST FOR STATIC (nonchanging) DATA otherwise for real time data use getServerSideProps
// notice is it below the coinlist component

export default CoinList;