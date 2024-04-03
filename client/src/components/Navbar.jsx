import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { useState } from "react";

const Navbar = () => {
  const clickObj = JSON.parse(localStorage.getItem("click"));
  const [applyColor,setApplyColor] = useState(clickObj || {dashboard: false, stats: false});
  const handleClick = (obj) => {
    localStorage.setItem("click",JSON.stringify(obj));
    setApplyColor(obj);
  }
  return (
    <Box minH= "100vh" bgColor = "#5b7cfd" color = "white" >
      <Heading p = "2rem">Admin Panel</Heading>
      <Flex direction = "column" mt = "1rem">
        <Link to = "/">
          <Text 
          display = "flex" 
          alignItems = "center" 
          gap = "0.5rem" 
          fontWeight= "500" 
          fontSize = "clamp(1rem,1vw,2rem)" 
          p = "2rem" 
          bgColor = {applyColor.dashboard && "#5374f0"}
          onClick = {() => handleClick({dashboard: true, stats: false})}
          >
            <FaHome />
            Dashboard
          </Text>
        </Link>
        <Link to = "/stats">
          <Text 
            display = "flex" 
            alignItems = "center" 
            gap = "0.5rem" 
            fontWeight= "500" 
            fontSize = "clamp(1rem,1vw,2rem)" 
            p = "2rem" 
            bgColor = {applyColor.stats && "#5374f0"}
            onClick = {() => handleClick({dashboard: false, stats: true})}
            >
              <ImStatsBars2 />
              Statistics
          </Text>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
