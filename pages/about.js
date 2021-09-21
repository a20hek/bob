import React from 'react';
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

export default function About() {
	return (
		<Box>
			<Box mr='5%' ml='5%'>
				<Navbar />
			</Box>
			<br />
			<Box bgColor='#600F0F' height='120px'>
				<Flex w='100%' h='100%' align='center'>
					<Heading fontWeight='bold' fontSize='5xl' mr='5%' ml='5%' color='white'>
						About
					</Heading>
				</Flex>
			</Box>
			<br />
			<br />
			<Box mr='5%' ml='5%'>
				<Text fontSize='36px' fontWeight='semibold'>
					What is a book club?
				</Text>
				<Text fontSize='20px' color='#635280'>
					A group of people who come together to discuss the book they read.
				</Text>
				<br />
				<br />
				<Text fontSize='36px' fontWeight='semibold'>
					How is the BondingOverBindings Book Club like?
				</Text>
				<Text fontSize='20px' color='#635280'>
					A group of people who come together to discuss the book they read.
				</Text>
				<br />
				<br />
				<Text fontSize='36px' fontWeight='semibold'>
					What do I have to do?
				</Text>
				<Text fontSize='20px' color='#635280'>
					Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum
					dolor amet
				</Text>
				<br />
				<br />
				<Text fontSize='36px' fontWeight='semibold'>
					Do I have to pay any money?
				</Text>
				<Text fontSize='20px' color='#635280'>
					No.
				</Text>
				<br />
				<br />
				<Text fontSize='36px' fontWeight='semibold'>
					What is our aim?
				</Text>
				<Text fontSize='20px' color='#635280'>
					To provide a way to connect to the reading community in Navi Mumbai.
				</Text>
				<br />
				<br />
			</Box>
		</Box>
	);
}
