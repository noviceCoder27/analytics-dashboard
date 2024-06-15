import { Box, Flex, Heading,Input,Text, Button,  } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import MonthSelect from "../components/MonthSelect"
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import useTransactionDetails from "../hooks/useTransactionData";
import TransactionTable from "../components/table/TransactionTable";


const Dashboard = () => {
    const [search,setSearch] = useState("");
    const [month,setMonth] = useState(3);
    const [page,setPage] = useState(1);
    const [data,totalPages] = useTransactionDetails(month,page,search);
    return (
        <Flex w= "100%" direction = {{base: "column",lg: "row"}}>
            <Navbar />
            <Flex w = {{base: "100%", lg: "70%", xl: "93vw"}} p ="2rem" direction = "column">
                <Heading>Transactions</Heading>
                <Box mt = "2rem" p = "1rem">
                    <Flex justifyContent= "space-between" my = "2rem" flexWrap= "wrap" gap = "1rem">
                        <Box position = "relative">
                            <Input 
                            placeholder = "Seacrh transaction" 
                            w = "25vw" 
                            minW= "150px" 
                            pl = "2.5rem"
                            value = {search}
                            onChange = {(e) => setSearch(e.target.value)}
                            />
                            <Box position = "absolute" top = "0.8rem" left = "1rem">
                                <CiSearch />
                            </Box>
                        </Box>
                        <Flex alignItems= "center" gap = "1rem">
                            <Text fontWeight= "500">Select Month:</Text>
                            <MonthSelect w = "150px" cursor = "pointer" month = {month} onChange = {setMonth}/>
                        </Flex>
                    </Flex>
                    <TransactionTable data = {data} />
                </Box>
                <Flex ml = "auto" mr = "auto" alignItems= "center" gap = "1rem" mt = "auto">
                    <Button _hover = {{bgColor: "#4d4cac",color: "white"}} isDisabled = {page === 1} onClick = {() => setPage(current => current-1)}>Prev</Button>
                    <Text fontWeight= "500">{page}</Text>
                    <Button _hover = {{bgColor: "#4d4cac",color: "white"}} isDisabled = {page === totalPages} onClick = {() => setPage(current => current+1)}>Next</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Dashboard
