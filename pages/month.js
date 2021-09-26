import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { createClient } from 'contentful';
import NextImage from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

//join
//login

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

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'book' });

	return {
		props: {
			books: res.items,
		},
	};
}

export default function Month({ books }) {
	console.log(books);
	return (
		<Box>
			<Box mr='5%' ml='5%'>
				<Navbar />
				<br />
				<Heading fontWeight='bold' fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}>
					This Month&apos;s books
				</Heading>
			</Box>
			<br />
			<br />
			{books.map((book) => (
				<Box
					id={book.fields.genre}
					bg={book.fields.hexcolor}
					w='100%'
					h='auto'
					p={2}
					key={book.fields.genre}
					mb='60px'>
					<Box mr='5%' ml='5%'>
						<Heading
							fontSize='28px'
							fontWeight='bold'
							textDecorationLine='underline'
							mt='10px'>
							{book.fields.genre}
						</Heading>
						<Flex mt='20px'>
							<Image
								alt='Fiction'
								src={'https:' + book.fields.cover.fields.file.url}
								width='auto'
								height='240px'
								mb={{ base: '0px', md: '24px', lg: '24px' }}
							/>
							<Flex direction='column' mr='2%' ml='2%'>
								<Heading fontSize='24px' fontWeight='bold'>
									{book.fields.name}
								</Heading>
								<Text textTransform='uppercase' fontWeight='medium' mt='8px'>
									{book.fields.author}
								</Text>
								<Text
									mt='16px'
									mb='16px'
									display={{ base: 'none', md: 'block', lg: 'block' }}
									w={{ base: 'auto', md: 'auto', lg: '1000px' }}>
									{/* {book.fields.excerpt.content[0].content[0].value} */}
									{documentToReactComponents(book.fields.excerpt)}
								</Text>
							</Flex>
						</Flex>
						<Text
							mt='16px'
							mb='16px'
							display={{ base: 'block', md: 'none', lg: 'none' }}
							w={{ base: 'auto', md: 'auto', lg: '800px' }}>
							{/* {book.fields.excerpt.content[0].content[0].value} */}
							{documentToReactComponents(book.fields.excerpt)}
						</Text>
					</Box>
				</Box>
			))}
		</Box>
	);
}
