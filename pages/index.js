import Head from 'next/head';
import NextLink from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

import {
	Box,
	Flex,
	Heading,
	Text,
	Input,
	Center,
	Image,
	SimpleGrid,
	useDisclosure,
	Link,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	InputGroup,
	InputLeftAddon,
	CloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Card = (props) => {
	return (
		<Box bg={props.color} m={2} borderRadius='5px' w='240px' h='280px' p={2}>
			<Heading fontSize='xl' fontWeight='500' opacity='0.9'>
				{props.genre}
			</Heading>
			<Text>Learn More</Text>
		</Box>
	);
};

function LandingPage() {
	const [display, setDisplay] = useState('none');
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box mr='5%' ml='5%'>
			<Navbar />

			<Flex>
				{/* <Box
					backgroundImage="url('herosection.svg')"
					height='330px'
					width='100%'
					bgPosition='center'
					bgRepeat='no-repeat'> */}
				<Box bg='#635280' height='30vw' width='100%' maxHeight='330px'>
					<Heading fontWeight='800' color='white' fontSize='4vw' ml={20} mt={10}>
						A Navi Mumbai based book club started
						<br />
						By students,
						<br /> For students.
					</Heading>
				</Box>
			</Flex>
			<Box position='relative'>
				<Box
					position='absolute'
					h='100%'
					w='100%'
					bgGradient='linear(360deg, #FFFFFF -2.7%, rgba(255, 255, 255, 0) 94.98%)'></Box>
				<Text>What is a book club?</Text>
				<Text>A group of people who come together to discuss the book they read.</Text>
				<Text>How is the BondingOverBindings Book Club like?</Text>
				<Text>A group of people who come together to discuss the book they read.</Text>
				<Text>What do I have to do?</Text>
				<Text>A group of people who come together to discuss the book they read.</Text>
			</Box>
			<Center>
				<Button>Read More</Button>
			</Center>

			<Center>
				<SimpleGrid columns={['2', '3', '4']}>
					<Card genre='Fiction' color='#E7A7AA' />
					<Card genre='Short Story Collection ' color='#99D2EF' />
					<Card genre='Fantasy Fiction' color='#8FBE8E' />
					<Card genre='Science Fiction' color='#FDD594' />
					<Card genre='Socio Political' color='#B7EAC8' />
					<Card genre='Tech Related' color='#ECA892' />
					<Card genre='Historical Fiction' color='#EDC0EE' />
					<Card genre='Essay Collection' color='#FFD8D8' />
					<Card genre='Poetry Collection' color='#BBB3DC' />
					<Card genre='Young Adult Fiction' color='#81FFD1' />
				</SimpleGrid>
			</Center>
		</Box>
	);
}
export default LandingPage;
