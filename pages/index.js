import Head from 'next/head';
import NextLink from 'next/link';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

import {
	Box,
	Flex,
	Heading,
	Text,
	Center,
	Image,
	SimpleGrid,
	Link,
	Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from '../components/Footer';

const Card = (props) => {
	return (
		<NextLink href={`/month#${props.id}`}>
			<Box
				bg={props.color}
				m={2}
				borderRadius='20px'
				w='240px'
				h='280px'
				p={2}
				filter=' drop-shadow(2px 6px 4px rgba(0, 0, 0, 0.4))'
				position='relative'
				cursor='pointer'>
				<Heading
					fontSize='28px'
					fontWeight='bold'
					textDecoration='underline'
					mt='40px'
					ml='28px'
					mr='28px'>
					{props.genre}
				</Heading>
				<span>
					<Link
						top='200px'
						right='54px'
						position='absolute'
						textColor='#ffffff'
						fontSize='18px'>
						Learn More
					</Link>
					<ArrowForwardIcon
						w={6}
						h={6}
						top='200px'
						right='32px'
						position='absolute'
						color='white'
					/>
				</span>
			</Box>
		</NextLink>
	);
};

function LandingPage() {
	const router = useRouter();

	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
              if (document.cookie && document.cookie.includes('bob-auth')) {
                window.location.href = "/home"
              }
            `,
				}}
			/>
			<Head>
				<title>Bonding over Bindings</title>
			</Head>
			<Box>
				<Box mr='5%' ml='5%'>
					<Navbar />

					<Flex>
						<Box
							bg='#635280'
							height='330px'
							width='100%'
							border='1px'
							right='-10px'
							top='20px'
							zIndex='10'
							position='relative'>
							<Box
								position='absolute'
								h='330px'
								w='100%'
								bg='#635280'
								border='1px'
								right={{ base: '10px', md: '15px', lg: '20px' }}
								bottom={{ base: '10px', md: '20px', lg: '20px' }}
								zIndex='5'>
								<Flex>
									<Heading
										fontWeight='800'
										color='white'
										fontSize={['36px', '42px', '42px']}
										ml={{ base: 5, lg: 10 }}
										mt={{ base: 8, lg: 10 }}
										zIndex='100'>
										A Navi Mumbai based reading community started
										<br />
										By students,
										<br /> For students.
									</Heading>
									<Image
										src='/hero-img.png'
										alt='hero-img'
										h='330px'
										right='5%'
										position='absolute'
										zIndex='50'
									/>
								</Flex>
							</Box>
						</Box>
					</Flex>
					<br />
					<br />
					<Box position='relative'>
						<Box
							position='absolute'
							h='100%'
							w='100%'
							bgGradient='linear(360deg, #FFFFFF -2.7%, rgba(255, 255, 255, 0) 94.98%)'></Box>
						<Text
							fontSize={{ base: '24px', sm: '32px', md: '36px', lg: '36px' }}
							fontWeight='semibold'>
							What is our aim?
						</Text>
						<Text
							fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '20px' }}
							color='#635280'>
							Bringing the reading community in Navi Mumbai together and attempting to
							introduce people to different genres and more diverse reads.
						</Text>
						<br />
						<Text
							fontSize={{ base: '28px', md: '36px', lg: '36px' }}
							fontWeight='semibold'>
							What is a book club?
						</Text>
						<Text
							fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '20px' }}
							color='#635280'>
							A group of people who come together to discuss the book they read.
						</Text>
						<br />
						<br />
						<Text
							fontSize={{ base: '28px', md: '36px', lg: '36px' }}
							fontWeight='semibold'>
							Do I have to pay any money?
						</Text>
						<Text
							fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '20px' }}
							color='#635280'>
							No.
						</Text>
						<br />
					</Box>
					<Center>
						<Button
							size='md'
							height='48px'
							width='200px'
							border='2px'
							borderColor='black.500'
							borderRadius='0px'
							bgColor='#635280'
							textColor='#ffffff'
							onClick={() => router.push('/about')}
							_hover={{ bg: '#886FB4' }}>
							Read More
						</Button>
					</Center>
					<br />
					<br />
					<br />
					<br />

					<Heading fontSize={{ base: '32px', sm: '36px', md: '42px', lg: '42px' }}>
						Books selected for the Jan-Feb-March session :
					</Heading>
					<br />
					<br />
				</Box>
				<Box bgColor='#445743' height='120px'>
					<Flex w='100%' h='100%' align='center'>
						<Text
							fontSize={{ base: '24px', sm: '32px', md: '36px', lg: '36px' }}
							fontWeight='bold'
							textDecoration='underline'
							textColor='#ffffff'
							mr='5%'
							ml='5%'>
							select the genre you’d prefer
						</Text>
					</Flex>
				</Box>
				<br />
				<br />
				<Box mr='5%' ml='5%'>
					<Center>
						<SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10}>
							<Card
								genre='Fantasy - Mythology - Retellings'
								color='#E7A7AA'
								id='fantasy-myth'
							/>
							<Card
								genre='Fiction - Translated from Marathi'
								color='#99D2EF'
								id='fiction-marathi'
							/>
							<Card
								genre='Non Fiction - Climate Change'
								color='#8FBE8E'
								id='non-fiction-climate'
							/>
							<Card
								genre='Short Story Collection - Based in Manipur'
								color='#FDD594'
								id='short-story-manipur'
							/>
							<Card
								genre='Fiction - Translated from Tamil'
								color='#B7EAC8'
								id='fiction-tamil'
							/>
							<Card
								genre='Non Fiction - The Youth and Tech'
								color='#ECA892'
								id='non-fictoin-youth-tech'
							/>
							<Card
								genre='Memoir - Based in Kashmir'
								color='#EDC0EE'
								id='memoir-kashmir'
							/>
							<Card
								genre='Fiction - Based in Rajasthan'
								color='#FFD8D8'
								id='fiction-rajasthan'
							/>
							<Card
								genre='Short Story Collection - Translated from Portuguese - Based in Goa'
								color='#BBB3DC'
								id='short-story-goa'
							/>
							<Card
								genre='Fiction - Translated from Bengali'
								color='#81FFD1'
								id='fiction-bengali'
							/>
						</SimpleGrid>
					</Center>
				</Box>
				<br />
				<br />
				<Footer />
			</Box>
		</>
	);
}
export default LandingPage;
