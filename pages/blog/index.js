import React from 'react';
import Navbar from '../../components/Navbar';
import { createClient } from 'contentful';
import NextLink from 'next/link';
import Footer from '../../components/Footer';
import Head from 'next/head';
import dateFormat from 'dateformat';
import LoggedInNav from '../../components/LoggedInNav';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

import {
	Box,
	Flex,
	Heading,
	Text,
	Center,
	Image,
	Button,
	SimpleGrid,
	Link,
} from '@chakra-ui/react';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'blog' });

	return {
		props: {
			blogposts: res.items,
		},
		revalidate: 60,
	};
}

export default function Blog({ blogposts }) {
	const { authenticated } = useFirebaseAuth();
	return (
		<>
			<Head>
				<title>Blog | Bonding over Bindings</title>
			</Head>
			<Box mr='5%' ml='5%' minH='100vh'>
				{authenticated ? <LoggedInNav /> : <Navbar />}
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
					{blogposts.map((blogpost) => (
						<Box
							id={blogpost.fields.title}
							w='100%'
							h='auto'
							p={2}
							key={blogpost.fields.title}
							mb='60px'>
							<NextLink href={`/blog/${blogpost.fields.id}`}>
								<Image
									alt={blogpost.fields.title}
									src={'https:' + blogpost.fields.cover.fields.file.url}
									width='auto'
									mb={{ base: '0px', md: '6px', lg: '6px' }}
									borderRadius='5px'
									cursor='pointer'
								/>
							</NextLink>
							<Text opacity='0.7'>
								{dateFormat(blogpost.fields.date, 'dd mmmm yyyy')}
							</Text>
							<NextLink href={`/blog/${blogpost.fields.id}`}>
								<Heading fontSize='3xl' color='#515151' cursor='pointer'>
									{blogpost.fields.title}
								</Heading>
							</NextLink>
							<Text fontSize='lg' mt='6px' opacity='0.9' color='6c6c6c'>
								{blogpost.fields.subtitle}
							</Text>
						</Box>
					))}
				</SimpleGrid>
			</Box>
			<Footer />
		</>
	);
}
