import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import TableItem from "./TableItem";


const TransactionTable = ({data}) => {
    const displayData = data?.map(item => (
        <TableItem item = {item} key = {item.id}/>
    ))
    
    return (
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
                <Tr>
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
    )
}

export default TransactionTable
