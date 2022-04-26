import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function List() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNum, setPageNum] = useState(1);
    const [status, setStatus] = useState(sessionStorage.getItem('username'));


    useEffect(() => {
        !status ? navigate('/') : console.log();
    })

    useEffect(() => {
        Axios.get(`https://randomuser.me/api/?page=${pageNum}&results=10&seed=abc`)
            .then((res) => {
                // handle success
                console.log(...res.data.results);
                setDetails([...details, ...res.data.results])
                setLoading(false)
            })
            .catch((err) => {
                // handle err
                console.log(err);
            })
    }, [pageNum])
    const handleScroll = (e) => {
        console.log(e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop);
        if (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop === 0) {
            setLoading(true)
            setTimeout(() => setPageNum(pageNum + 1), 1000)
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem("username");
        setStatus(null)
    }

    return (<div className="contener">
        <div class="signout">
            <button class="btn btn-sm btn-light" type="submit" name="signout"
                value="signout" onClick={handleLogout}>Sign Out</button>
        </div>
        <div className="main">
            <main onScroll={handleScroll}>
                {details[1] && details.map(item => <>
                    <div className={`message received`}>
                        <img className='dp' src={item.picture.medium} alt='DP' />
                        <p>{`${item.name.title} ${item.name.first}`}</p>
                    </div>
                </>)}
                {loading && <div className='ps-5 p-3'>Loading...</div>}
            </main>
        </div>
    </div>)
}

