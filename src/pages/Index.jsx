import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={2}>Welcome to My Personal Website</Heading>
          <Text fontSize="xl">Explore my world of innovation and creativity.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
          <VStack align="start">
            <Text fontWeight="bold" fontSize="2xl">
              About Me
            </Text>
            <Text>Discover my journey and experiences in the professional world.</Text>
          </VStack>
          <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ5MjAzNjN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={2}>My Services</Heading>
          <Stack direction={["column", "row"]} spacing={4}>
            <Button leftIcon={<FaRocket />} colorScheme="teal" variant="solid">
              Consultation
            </Button>
            <Button leftIcon={<FaRocket />} colorScheme="teal" variant="solid">
              Product Sales
            </Button>
            <Button leftIcon={<FaRocket />} colorScheme="teal" variant="solid">
              Custom Solutions
            </Button>
          </Stack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={2}>Contact Me</Heading>
          <Text>Feel free to reach out for collaborations or queries!</Text>
          <Button mt={4} size="lg" colorScheme="blue">
            Get in Touch
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
