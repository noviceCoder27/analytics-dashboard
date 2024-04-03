import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import usePieChartData from "../../hooks/usePieChartData";
import { Spinner,Flex,Heading,Box,Text } from '@chakra-ui/react';
import { useState } from "react";
import MonthSelect from "../MonthSelect";
import { useMemo } from "react";




const PieChart = () => {
    const [month,setMonth] = useState(3);
    const [stats] = usePieChartData(month);

    const data = useMemo(() => {
        const chartData = {};
        if(stats) {
            chartData.labels = Object.keys(stats);
            chartData.datasets = [
                {
                    data: Object.values(stats),
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }
            ]
        }
        return chartData;
    },[stats])

    const config = {
        type: 'pie',
        data: data,
        options: {
          responsive: true
        },
    };

    return (
        <>
            <Box mb = "2rem">
                <Heading mb = "2rem">Categories</Heading>
                <MonthSelect cursor = "pointer" month = {month} setmonth = {setMonth}/>
            </Box>
            {stats ?  
            <Box direction = "column">
                <Pie data = {data} options={config}/>
                <Text textAlign= "center" mt = "2rem" color = 'gray' fontWeight= "bold">Items per category</Text>
            </Box> : 
            <Flex>
                <Spinner size = "xl" ml = "auto" mr = "auto"/>
            </Flex>  }
        </>
        
    )
}

export default PieChart
