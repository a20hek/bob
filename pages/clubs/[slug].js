import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { Box, Flex, Heading, Text, Center, Image, Button, useToast } from '@chakra-ui/react';
import LoggedInNav from '../../components/LoggedInNav';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { db, auth } from '../../lib/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import NotLoggedin from '../../components/NotLoggedin';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'book',
	});
	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({ content_type: 'book', 'fields.id': params.slug });

	return {
		props: {
			books: items[0],
		},
		revalidate: 60,
	};
}

export default function Clubspage({ books }) {
	const id = books.fields.id;
	const [btnhover, setBtnhover] = useState('#886FB4');
	const [uid, setUid] = useState(undefined);
	const [btncolor, setBtncolor] = useState('#635280');
	const [btntext, setBtntext] = useState('Join for this book');
	const { authenticated } = useFirebaseAuth();

	const toast = useToast();

	const handleClick = () => {
		setBtncolor('#0EB500');
		setBtntext('Joined for this club');
		setBtnhover('#13DA01');
		toast({
			title: 'You have been added to the club',
			description:
				'An email regarding your joining info will be sent to you within a few days',
			status: 'success',
			duration: 5000,
			isClosable: true,
		});
	};

	function updateClub(id, uid) {
		const userRef = doc(db, 'users', uid);
		return updateDoc(userRef, {
			clubs: arrayUnion(id),
		});
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUid(user.uid);
			}
		});
	}, []);

	return (
		<>
			{authenticated ? (
				<>
					<Head>
						<title>{books.fields.genre} Club - Bondings over Bindings</title>
					</Head>
					<Box bgColor={books.fields.hexcolor} minH='100vh'>
						<Box mr='5%' ml='5%'>
							<LoggedInNav />
						</Box>
						<Box>
							<Box
								mr='5%'
								ml='5%'
								display={{ base: 'none', md: 'block', lg: 'block' }}>
								<Heading pt='36px' fontSize='48px' fontWeight='bold'>
									{books.fields.name}
								</Heading>
								<Flex>
									<Box mr='36px' w='200px'>
										<Image
											alt={books.fields.name}
											src={'https:' + books.fields.cover.fields.file.url}
											width='auto'
											height='240px'
											mb='8px'
											mt='36px'
											mr='24px'
											minW='140px'
										/>
										<Flex direction='column'>
											<Heading fontSize='20px' opacity='0.9'>
												{books.fields.author}
											</Heading>
											<Text fontSize='16px' opacity='0.7' fontWeight='medium'>
												{books.fields.genre}
											</Text>
											<Text fontSize='14px' fontWeight='medium' opacity='0.7'>
												{books.fields.pages} pages
											</Text>
										</Flex>
									</Box>
									<Flex direction='column' maxW='1000px'>
										<Flex direction='column'>
											<Heading mt='24px' fontSize='3xl' fontWeight='semibold'>
												What is the Book About?
											</Heading>
											<br />
											<Text>
												{documentToReactComponents(books.fields.synopsis)}
											</Text>
										</Flex>

										<br />
										<br />
										<Flex direction='column'>
											<Heading fontSize='3xl' fontWeight='semibold'>
												About the Author
											</Heading>
											<br />
											<Text>
												{documentToReactComponents(books.fields.authorInfo)}
											</Text>
										</Flex>
									</Flex>
								</Flex>
								<Center>
									<Button
										bgColor={btncolor}
										textColor='#ffffff'
										_hover={{ bg: btnhover }}
										mt='24px'
										mb='24px'
										onClick={() =>
											updateClub(id, uid).then(() => handleClick())
										}>
										{btntext}
									</Button>
								</Center>
							</Box>
							<Box
								mr='5%'
								ml='5%'
								display={{ base: 'block', md: 'none', lg: 'none' }}>
								<Heading pt='36px' fontSize='48px' fontWeight='bold'>
									{books.fields.name}
								</Heading>
								<Box float='left' mb='16px' mt='36px' mr='24px' w='170px'>
									<Image
										alt={books.fields.name}
										src={'https:' + books.fields.cover.fields.file.url}
										width='auto'
										height='240px'
										mb='16px'
									/>
									<Flex direction='column'>
										<Heading fontSize='18px' opacity='0.9'>
											{books.fields.author}
										</Heading>
										<Text opacity='0.7' fontWeight='medium'>
											{books.fields.genre}
										</Text>
										<Text fontSize='14px' fontWeight='medium' opacity='0.7'>
											{books.fields.pages} pages
										</Text>
									</Flex>
								</Box>

								<Heading mt='24px' fontSize='3xl' fontWeight='semibold'>
									What is the Book About?
								</Heading>
								<br />
								<Text>{documentToReactComponents(books.fields.synopsis)}</Text>
								<br />
								<br />
								<Heading fontSize='3xl' fontWeight='semibold'>
									About the Author
								</Heading>
								<br />
								<Text>{documentToReactComponents(books.fields.authorInfo)}</Text>

								<Center>
									<Button
										ml='5%'
										bgColor={btncolor}
										textColor='#ffffff'
										_hover={{ bg: btnhover }}
										mt='24px'
										mb='24px'
										onClick={() =>
											updateClub(id, uid).then(() => handleClick())
										}>
										{btntext}
									</Button>
								</Center>
							</Box>
						</Box>
					</Box>
				</>
			) : (
				<NotLoggedin />
			)}
		</>
	);
}
