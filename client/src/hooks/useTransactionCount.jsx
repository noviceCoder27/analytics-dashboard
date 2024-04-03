import { useEffect, useState } from "react"
import {fetchTransactionsCount } from "../apis/transactions";
import {  useToast } from "@chakra-ui/react";


const useTransactionsCount = (month) => {
    const [stats,setStats] = useState(null);
    const toast = useToast();

    useEffect(() => {
        const getStats = async() => {
            try {
                const data = await fetchTransactionsCount();
                setStats(data);
            } catch(err) {
                toast({
                    title: 'Error ',
                    description: "Error fetching the stats",
                    status: 'error',
                    duration: 1000,
                    isClosable: true,
                    position: 'top-right'
                })
            }
        }
        getStats();
    },[month]);
    return stats;
}

export default useTransactionsCount
