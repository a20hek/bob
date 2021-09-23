import React from 'react';
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
import NextLink from 'next/link';

export default function Navbar() {
	return (
		<Box>
			<Flex justifyContent='space-between' h='70px'>
				<Flex align='center'>
					<NextLink href='/month' passHref>
						<Link fontSize='16px' fontWeight='500' mr='60px'>
							This Month&apos;s Books
						</Link>
					</NextLink>
					<NextLink href='/about' passHref>
						<Link fontSize='16px' fontWeight='500'>
							About
						</Link>
					</NextLink>
				</Flex>
				<Flex justifyContent='center' align='center'>
					<NextLink href='/#'>
						<Image src='/logo.svg' alt='leetlinc' cursor='pointer' h='30px' />
					</NextLink>
				</Flex>
				<Flex align='center'>
					<Button mr='60px' variant='ghost'>
						Login
					</Button>
					<Button border='2px' bgColor='#ffffff' borderRadius='0px'>
						Sign Up
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
