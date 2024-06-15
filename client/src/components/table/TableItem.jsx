import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Td, Text, Tr } from "@chakra-ui/react"
import { IoMdArrowDropdown } from "react-icons/io";
import { RxOpenInNewWindow } from "react-icons/rx";
import { formatTitle } from './../../utils/formatData';


const TableItem = ({item}) => {
    return (
        <Tr>           
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
                        <PopoverBody p = "1rem" bgColor = "lightblue" borderRadius= "10px" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">{item.description}</PopoverBody>
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
    )
}

export default TableItem
