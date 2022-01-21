import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { Box, Flex, Heading, Text, Center, Image, Button, useToast } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import dateFormat from 'dateformat';
import Footer from '../../components/Footer';
import LoggedInNav from '../../components/LoggedInNav';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'blog',
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
	const { items } = await client.getEntries({ content_type: 'blog', 'fields.id': params.slug });

	return {
		props: {
			blogpost: items[0],
		},
		revalidate: 60,
	};
}

export default function Blogpage({ blogpost }) {
	const { authenticated } = useFirebaseAuth();
	const options = {
		renderText: (text) => {
			return text.split('\n').reduce((children, textSegment, index) => {
				return [...children, index > 0 && <br key={index} />, textSegment];
			}, []);
		},
	};
	return (
		<>
			<Head>
				<title>{blogpost.fields.title} | Bonding over Bindings</title>
			</Head>
			<Box mr='5%' ml='5%'>
				{authenticated ? <LoggedInNav /> : <Navbar />}
			</Box>
			<br />
			<br />
			<Box pr='15%' pl='15%' w='100%' h='auto'>
				<Heading fontSize='5xl'>{blogpost.fields.title}</Heading>
				<br />
				<Text fontWeight='500' fontSize='2xl' color='6c6c6c' opacity='0.8'>
					{blogpost.fields.subtitle}
				</Text>
				<br />
				<Text fontSize='xl' opacity='0.7'>
					{dateFormat(blogpost.fields.date, 'dd mmmm yyyy')}
				</Text>
			</Box>
			<Image
				alt={blogpost.fields.title}
				src={'https:' + blogpost.fields.cover.fields.file.url}
				width='100%'
				height='300px'
				objectFit='cover'
				pt={2}
				pb={2}
			/>

			<Box pr='15%' pl='15%' w='100%' h='auto' mb='60px'>
				<Text fontSize='lg'>
					{documentToReactComponents(blogpost.fields.content, options)}
				</Text>
			</Box>
			<Footer />
		</>
	);
}
