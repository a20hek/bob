import React from 'react';
import Navbar from '../components/Navbar';
import NextLink from 'next/link';
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import LoggedInNav from '../components/LoggedInNav';

export default function About() {
	const { authenticated } = useFirebaseAuth();
	return (
		<>
			<Head>
				<title>About | Bonding over Bindings</title>
			</Head>
			<Box>
				<Box mr='5%' ml='5%'>
					{authenticated ? <LoggedInNav /> : <Navbar />}
				</Box>
				<br />
				<Box bgColor='#600F0F' height={{ base: '100px', md: '120px', lg: '120px' }}>
					<Flex w='100%' h='100%' align='center'>
						<Heading
							fontWeight='bold'
							fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}
							mr='5%'
							ml='5%'
							color='white'>
							About
						</Heading>
					</Flex>
				</Box>
				<br />
				<br />
				<Box mr='5%' ml='5%'>
					<Text fontSize={{ base: '28px', md: '36px', lg: '36px' }} fontWeight='semibold'>
						What is our aim?
					</Text>
					<Text fontSize='20px' color='#635280'>
						Bringing the reading community in Navi Mumbai together and attempting to
						introduce people to different genres and more diverse reads.
					</Text>
					<br />
					<br />
					<Text fontSize={{ base: '28px', md: '36px', lg: '36px' }} fontWeight='semibold'>
						What is a book club?
					</Text>
					<Text fontSize='20px' color='#635280'>
						A group of people who come together to discuss the book they read.
					</Text>
					<br />
					<br />
					<Text fontSize={{ base: '28px', md: '36px', lg: '36px' }} fontWeight='semibold'>
						How is the BondingOverBindings Book Club like?
					</Text>
					<Text fontSize='20px' color='#635280'>
						“There&apos;s a book for everyone, even if they don&apos;t think there is. A
						book that reaches in and grabs your soul.” ― Veronica Henry, How to Find
						Love in a Bookshop.
						<br />
						Hence, rather than having one book for the club discussion, we at
						BondingOverBindings Club are attempting to consider a variety of genres, so
						that there&apos;s a book recommendation for everyone to try.
					</Text>
					<br />
					<br />
					<Text fontSize={{ base: '28px', md: '36px', lg: '36px' }} fontWeight='semibold'>
						What do I have to do?
					</Text>
					<Text fontSize='20px' color='#635280'>
						Go through all the genres you like or the genres you&apos;d like to explore.
						In the{' '}
						<NextLink href='/month'>
							<Link textColor='#000'>This Month&apos;s Book</Link>
						</NextLink>{' '}
						page we provide you with a sneak peek of the books selected. To join the
						book club via the book you feel tempted to read, click on &apos;Join the
						club&apos;, and then you can sign up to become a member of the
						BondingOverBindings Club.
						<br /> We will curate books for 10 genres. You can select as many books as
						you want to read , and find buddy readers along the way. Each session at BOB
						lasts for three months. So you have three blissful months to read the book
						you want. In the end of the session we will arrange a Book Club Discussion
						through a video conference. Every member of the BOB club will be informed
						about the discussion via an email with an invitation to the meet.
					</Text>
					<br />
					<br />
					<Text fontSize={{ base: '28px', md: '36px', lg: '36px' }} fontWeight='semibold'>
						Do I have to pay any money?
					</Text>
					<Text fontSize='20px' color='#635280'>
						No.
					</Text>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</Box>
				<Heading
					as='u'
					fontWeight='bold'
					fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}
					mr='5%'
					ml='5%'
					color='#000'>
					Contact Information:
				</Heading>
				<Text fontSize='20px' color='#635280' mr='5%' ml='5%'>
					bondingoverbindingss@gmail.com <br />
					amritha1352@gmail.com <br />
					abbhishekk27@gmail.com
				</Text>
				<br />
				<Footer />
			</Box>
		</>
	);
}
