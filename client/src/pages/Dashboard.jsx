import { Box, Flex, Heading, Table,Thead,Tr,Th,Td,Tbody, Input,Text, Button, Popover,PopoverTrigger,PopoverContent,PopoverArrow,PopoverCloseButton,PopoverBody, TableContainer  } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import MonthSelect from "../components/MonthSelect"
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import useTransactionDetails from "../hooks/useTransactionData";
import useTransactionsCount from "../hooks/useTransactionCount";
import { useMemo } from "react";
import { formatTitle } from './../utils/formatData';
import { IoMdArrowDropdown } from "react-icons/io";
import { RxOpenInNewWindow } from "react-icons/rx";


const Dashboard = () => {
    const [search,setSearch] = useState("");
    const [month,setMonth] = useState(3);
    const [page,setPage] = useState(1);
    const [data] = useTransactionDetails(month,page,search);
    const totalItems = useTransactionsCount();
    let totalPages = useMemo(() => {
        let pages = 1;
        if(totalItems) {
            pages = totalItems.total/10;
        }
        return pages;
    },[totalItems]);

    const displayData = data?.map(item => (
        <Tr key = {item.id}>
            <Td>{item.id}</Td>
            <Td cursor = "default" title = {item.title}>{formatTitle(item.title)}</Td>
            <Td>
                <Popover>
                    <PopoverTrigger>
                        <Button display = "flex" gap = "0.5rem" bgColor = "lightskyblue">
                            View Description 
                            <IoMdArrowDropdown/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent w = "30vw" minW = {{base: "200px",md: "400" ,xl: "500px"}}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody p = "1rem" >{item.description}</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Td>
            <Td>{item.price}</Td>
            <Td>{item.category}</Td>
            <Td>
                <Text 
                p = "0.5rem 1rem" 
                border = "4px solid red" 
                textAlign= "center"
                fontWeight= "bold"
                borderRadius = "10px"
                borderColor = {item.sold ? "lightgreen": "red"}
                color = {item.sold ? "lightgreen": "red"}
                >
                    {item.sold ? "YES" : "NO"}
                </Text>
            </Td>
            <Td>
                <Button
                display= "flex"
                gap = "0.5rem" 
                bgColor = "lightskyblue"
                onClick = {() => {
                    window.open(item.image,"_blank")
                }}>
                    View Image
                    <RxOpenInNewWindow />
                </Button>
            </Td>
        </Tr>
    ))
    return (
        <Flex>
            <Navbar />
            <Flex w= "100%" p ="2rem" direction = "column">
                <Heading>Transactions</Heading>
                <Box mt = "2rem" p = "1rem">
                    <Flex justifyContent= "space-between" my = "2rem">
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
                            <MonthSelect w = "150px" cursor = "pointer" month = {month} setmonth = {setMonth}/>
                        </Flex>
                    </Flex>
                    <Box 
                    overflowX = "scroll"
                    css={{
                        '&::-webkit-scrollbar': {
                          backgroundColor: "transparent",
                          height: "4px"
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: "rgba(54, 162, 235,0.5)",
                            borderRadius: '24px',
                        },
                    }}
                    >
                        <Table variant='simple' bgColor = "whitesmoke">
                            <Thead bgColor = "rgba(54, 162, 235,0.5)" >
                            <Tr >
                                <Th>ID</Th>
                                <Th>Title</Th>
                                <Th>Description</Th>
                                <Th>Price</Th>
                                <Th>Category</Th>
                                <Th>Sold</Th>
                                <Th>Image</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                {displayData}
                            </Tbody>
                        </Table>
                    </Box>
                        
                </Box>
                <Flex ml = "auto" mr = "auto" alignItems= "center" gap = "1rem" mt = "auto">
                    <Button isDisabled = {page === 1} onClick = {() => setPage(current => current-1)}>Prev</Button>
                    <Text>{page}</Text>
                    <Button isDisabled = {page === totalPages} onClick = {() => setPage(current => current+1)}>Next</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Dashboard
