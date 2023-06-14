import useSWR from "swr";
import Deletepost from "./Deletepost";
import "../styles/allposts.css"

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function Allposts() {

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_KEY}/data`, fetcher, {
        refreshInterval: 1000,
        refreshWhenHidden: 0,
        refreshWhenOffline: 0
    });

    return (
        <>
            {data ? <div>
                {data.map((items, id) => {
                    return (
                        <div className="card" key={id}>
                            <Deletepost id={items.id} />
                            <p>{items.date} by {items.name}</p>
                            <h3>{items.title}</h3>
                            <h4>{items.content}</h4>

                            <button id="read-more">Read More</button>
                        </div>
                    )
                })

                }
            </div> : <h4>Loading.....</h4>} </>
    )
}

export default Allposts