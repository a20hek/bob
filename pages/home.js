import React from 'react';
import LoggedInNav from '../components/LoggedInNav';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import NextLink from 'next/link';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import NotLoggedin from '../components/NotLoggedin';
import { db, auth } from '../lib/firebase';
import { Box, Flex, Heading, Text, Center, Image, Button } from '@chakra-ui/react';

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
		revalidate: 60,
	};
}

export default function Month({ books }) {
	const { authenticated } = useFirebaseAuth();

	return (
		<>
			{authenticated ? (
				<>
					<Head>
						<title>Home | Bonding over Bindings</title>
					</Head>
					<Box>
						<Box mr='5%' ml='5%'>
							<LoggedInNav />
							<br />
							<Heading
								fontWeight='bold'
								fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}>
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
											alt={book.fields.name}
											src={'https:' + book.fields.cover.fields.file.url}
											width='auto'
											height='240px'
											mb={{ base: '0px', md: '24px', lg: '24px' }}
										/>
										<Flex direction='column' mr='2%' ml='2%'>
											<Flex w='100%' justifyContent='space-between'>
												<Heading
													fontSize='24px'
													fontWeight='bold'
													mr='5%'
													maxW='400px'>
													{book.fields.name}
												</Heading>
												<NextLink href={`/clubs/${book.fields.id}`}>
													<Button
														ml='5%'
														bgColor='#635280'
														textColor='#ffffff'
														_hover={{ bg: '#886FB4' }}
														display={{
															base: 'none',
															md: 'block',
															lg: 'block',
														}}>
														Know More
													</Button>
												</NextLink>
											</Flex>
											<Text
												textTransform='uppercase'
												fontWeight='medium'
												mt='8px'>
												{book.fields.author}
											</Text>
											<Text
												mt='16px'
												mb='16px'
												display={{ base: 'none', md: 'block', lg: 'block' }}
												w={{ base: 'auto', md: 'auto', lg: '70vw' }}>
												{documentToReactComponents(book.fields.excerpt)}
											</Text>
										</Flex>
									</Flex>
									<Text
										mt='16px'
										mb='16px'
										display={{ base: 'block', md: 'none', lg: 'none' }}
										w={{ base: 'auto', md: 'auto', lg: '800px' }}>
										{documentToReactComponents(book.fields.excerpt)}
									</Text>
									<Center>
										<NextLink href={`/clubs/${book.fields.id}`}>
											<Button
												ml='5%'
												bgColor='#635280'
												textColor='#ffffff'
												_hover={{ bg: '#886FB4' }}
												display={{ base: 'block', md: 'none', lg: 'none' }}
												mb='24px'>
												Know More
											</Button>
										</NextLink>
									</Center>
								</Box>
							</Box>
						))}
						<Footer />
					</Box>
				</>
			) : (
				<NotLoggedin />
			)}
		</>
	);
}
