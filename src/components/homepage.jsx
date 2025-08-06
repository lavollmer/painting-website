import '../App.css'
import '../index.css'
import Navbar from './navbar'
import Footer from "./footer"
import {Flex, Heading, Box, Text} from '@chakra-ui/react'

const homepage = () => {
return (
  <Flex direction="column">
    <Navbar />

    <Heading as="h1" size="xl" color="red.500" fontWeight="bold" mb={4}>
      Hello Chakra
    </Heading>

    <Box bg="cherryPink" color="white" p={4} mb={4}>
      <Heading as="h1" size="md">
        Custom Watercolor Illustrations
      </Heading>
    </Box>

    <Text fontSize="lg" mb={4}>
      By Laura
    </Text>

    <Footer />
  </Flex>
);

}

export default homepage