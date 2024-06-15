import { useEffect, useState } from "react"
import { fetchTransactionDetails } from "../apis/transactions";
import {  useToast } from "@chakra-ui/react";


const useTransactionDetails = (month,page,search) => {
    const [stats,setStats] = useState(null);
    const [loading,setLoading] = useState(true);
    const [totalPages,setTotalPages] = useState(1);
    const toast = useToast();

    useEffect(() => {
        const getStats = async() => {
            try {
                const data = await fetchTransactionDetails(month,page,search);
                setStats(data.transactions);
                setTotalPages(data.pages)
                setLoading(false);
            } catch(err) {
                toast({
                    title: 'Error ',
                    description: "Error fetching the stats",
                    status: 'error',
                    duration: 1000,
                    isClosable: true,
                    position: 'top-right'
                })
                setLoading(false);
            }
        }
        getStats();
    },[month,page,search]);
    return [stats,totalPages,loading];
}

export default useTransactionDetails
