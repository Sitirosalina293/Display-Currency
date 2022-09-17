import { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'https://api.currencyfreaks.com/latest?apikey=6061235da5864a698a84396fad792c07&symbols=CAD,IDR,JPY,CHF,EUR,GBP'

function Api() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const getCurrency = async () => {
            try {
                const res = await axios.get(API)
                setData(res.data)
            } catch (error) { }
        }
        getCurrency()
    }, [])

    return { data }
}

export default Api