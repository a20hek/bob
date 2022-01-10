// import React from 'react';
// import Navbar from '../components/Navbar';
// import { createClient } from 'contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { useRouter } from 'next/router';
// import NextLink from 'next/link';
// import Footer from '../components/Footer';
// import Head from 'next/head';
// import { Box, Flex, Heading, Text, Center, Image, Button } from '@chakra-ui/react';

// export async function getStaticProps() {
// 	const client = createClient({
// 		space: process.env.CONTENTFUL_SPACE_ID,
// 		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// 	});

// 	const res = await client.getEntries({ content_type: 'blog' });

// 	return {
// 		props: {
// 			blogposts: res.items,
// 		},
// 		revalidate: 60,
// 	};
// }

// export default function Month({ blogposts }) {
// 	const router = useRouter();
// 	return (
// 		<>
// 			{blogposts.map((blogpost) => (
// 				<Box
// 					id={blogpost.fields.title}
// 					w='100%'
// 					h='auto'
// 					p={2}
// 					key={book.fields.title}
// 					mb='60px'>
// 					<NextLink href={`/blog/${blogpost.fields.id}`}>
// 						<Heading>{blogpost.fields.title}</Heading>
// 					</NextLink>
// 					<Text>{blogpost.fields.subtitle}</Text>
// 				</Box>
// 			))}
// 		</>
// 	);
// }
