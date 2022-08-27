
import React from "react";
import Card from "../../components/Card";
import stayled from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../redux/cardSlice";

const MainPage = () => {
    
    const [currentPage, setCurrentPage] = React.useState(8);
    const [fetching, setFetching] = React.useState(true)

    const data = useSelector((state) => state.card.card);

    const dispatch = useDispatch();

    React.useEffect(() => {
        if (fetching) {
        currentPage !== data?.total && setCurrentPage(prevState => prevState + 8)
        dispatch(fetchCard(currentPage))
        .finally(() => setFetching(false))
        }
    }, [fetching]);

    React.useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

            return function (){
                document.removeEventListener('scroll', scrollHandler)
            };
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
        setFetching(true)
        }
    }

    return (
        <div className={stayled.main}>
            {data?.items.map((item) => (
            <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MainPage;