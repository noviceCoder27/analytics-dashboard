import { useEffect, useState } from "react"
import { fetchBarChartData } from "../apis/transactions";
import {  useToast } from "@chakra-ui/react";


const useBarChartData = (month) => {
    const [stats,setStats] = useState(null);
    const [loading,setLoading] = useState(true);
    const toast = useToast();

    useEffect(() => {
        const getStats = async() => {
            try {
                const data = await fetchBarChartData(month);
                setStats(data);
                setLoading(false);
            } catch(err) {
                toast({
                    title: 'Error ',
                    description: "Error fetching bar chart data",
                    status: 'error',
                    duration: 1000,
                    isClosable: true,
                    position: 'top-right'
                })
                setLoading(false);
            }
        }
        getStats();
    },[month]);
    return [stats,loading];
}

export default useBarChartData
