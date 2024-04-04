import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { Spinner,Flex,Heading,Box,Text } from '@chakra-ui/react';
import { useState } from "react";
import MonthSelect from "../MonthSelect";
import { useMemo } from "react";
import useBarChartData from "../../hooks/useBarChartData";




const BarChart = () => {
    const [month,setMonth] = useState(3);
    const [stats] = useBarChartData(month);
    const data = useMemo(() => {
        const chartData = {};
        if(stats) {
            chartData.labels = Object.keys(stats);
            chartData.datasets = [
                {
                    label: "Number of items",
                    data: Object.values(stats),
                    backgroundColor: ['#36A2EB'],
                    hoverBackgroundColor: ['#36A2EB']
                }
            ]
        }
        return chartData;
    },[stats])

    const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true
        },
    };

    return (
        <>
            <Flex mb = "2rem" alignItems= "center" justifyContent= "space-between">
                <Heading mb = "2rem">Price Range Stats</Heading>
                <MonthSelect w = "150px" cursor = "pointer" month = {month} onChange = {setMonth}/>
            </Flex>
            {stats ?  
            <Box direction = "column">
                <Bar data = {data} options={config}/>
                <Text textAlign= "center" mt = "2rem" color = 'gray' fontWeight= "bold">Items per price range</Text>
            </Box> : 
            <Flex>
                <Spinner size = "xl" ml = "auto" mr = "auto"/>
            </Flex>  }
        </>
        
    )
}

export default BarChart
