import React from 'react';
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

const Card = (props) => {
	return (
		<Box bg={props.color} m={2} borderRadius='5px' w='100%' h='280px' p={2}>
			<Heading fontSize='xl' fontWeight='500' opacity='0.9'>
				{props.genre}
			</Heading>
			<Text>Learn More</Text>
		</Box>
	);
};

export default function Month() {
	return (
		<Box>
			<Box mr='5%' ml='5%'>
				<Navbar />
				<br />
				<Heading fontWeight='bold' fontSize='5xl'>
					This Month&apos;s books
				</Heading>
			</Box>
		</Box>
	);
}
