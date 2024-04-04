import { Box, Flex, Heading, Select, Text, Spinner } from "@chakra-ui/react"
import { useState } from "react"
import useStats from "../hooks/useStats";
import MonthSelect from "./MonthSelect";


const StatCards = () => {
    const [month,setMonth] = useState(3);
    const [data,loading] = useStats(month);
    return (
        <Box  w = {{xl: "100%"}} height = "fit-content" bgColor = "white" p = "2rem" borderRadius= "20px" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
            <Flex mb = "2rem" justifyContent= "space-between" alignItems= "center">
                <Heading>Statistics</Heading>
                <MonthSelect w= "150px" cursor= "pointer" month = {month} onChange = {setMonth}/>
            </Flex>
            <Flex gap = '2rem' flexWrap= {{base: "wrap",md: "nowrap"}}>
                {loading ? <Spinner ml = "auto" mr = "auto" mt = "3rem" size = "xl"/> :
                <>
                    <Box 
                    bgColor = "#4d4cac" 
                    color = "white" 
                    p = "2rem" 
                    flexGrow = "1"  
                    textAlign= "center" 
                    borderRadius= "10px"
                    w = {{base: "100%", xl: "14vw"}}
                    fontWeight= "bold"
                    >
                        <Text fontSize = "clamp(1.2rem,2vw,2.5rem)">{Math.floor(data?.sale_amount)}</Text>
                        <Text color = "whitesmoke">Total Sale</Text>
                    </Box>
                    <Box 
                    bgColor = "#9698d6" 
                    color = "white" 
                    p = "2rem" 
                    flexGrow = "1"  
                    textAlign= "center" 
                    borderRadius= "10px"
                    w = {{base: "100%", xl: "14vw"}}
                    fontWeight = "bold"
                    >
                        <Text fontSize = "clamp(1.2rem,2vw,2.5rem)">{data?.sell_count}</Text>
                        <Text color = "whitesmoke">Items Sold</Text>
                        
                    </Box>
                    <Box 
                    bgColor = "#f77c87" 
                    color = "white" 
                    p = "2rem" 
                    flexGrow = "1"  
                    textAlign= "center" 
                    borderRadius= "10px"
                    w = {{base: "100%", xl: "14vw"}}
                    fontWeight = "bold"
                    >
                        <Text fontSize = "clamp(1.2rem,2vw,2.5rem)">{data?.unsold_count}</Text>
                        <Text color = "whitesmoke">Items Unsold</Text>
                    </Box>
                </>
                }
            </Flex>
        </Box>
    )
}

export default StatCards
