import { Box, Flex} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import StatCards from "../components/StatCards";
import PieChart from "../components/graphs/PieChart";
import BarChart from "../components/graphs/BarChart";



const Statistics = () => {
  
    return (
        <Flex>
            <Navbar />
            <Flex flexGrow= "1" p = "2rem" bgColor = "whitesmoke" gap = "2rem" direction = {{base: "column",xl: "row"}}>
                <Flex w= "70%" justifyContent= "center" gap = "2rem" direction = "column">
                    <StatCards />
                    <Box w = "100%" bgColor = "white" p = "2rem" borderRadius= "20px" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                        <BarChart />
                    </Box>
                </Flex>
                <Box w= "30%" bgColor = "white" p = "2rem"  borderRadius= "20px" height = 'fit-content' boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" >
                        <PieChart />
                    </Box>
            </Flex>
        </Flex>
    )
}

export default Statistics
