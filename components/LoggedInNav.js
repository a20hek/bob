import React, { useState, useEffect } from 'react';
import {
	Box,
	Flex,
	Text,
	Center,
	Image,
	Link,
	Button,
	CloseButton,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Accordion,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { db, auth } from '../lib/firebase';
import { onAuthStateChanged } from '@firebase/auth';

import { collection, query, where, getDocs } from 'firebase/firestore';

import { user, logout } from '../hooks/useFirebaseAuth';

export default function Navbar() {
	const [result, setResult] = useState([]);
	const uid = auth.currentUser?.uid;

	async function Userdata(uid) {
		const snapshot = await getDocs(query(collection(db, 'users'), where('uid', '==', uid)));
		const results = [];
		snapshot.forEach((doc) => {
			results.push({ id: doc.id, ...doc.data() });
		});
		return { results };
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				Userdata(user.uid).then(({ results }) => setResult(results));
			}
		});
	}, []);

	useEffect(() => {
		console.log(uid, result);
	}, [uid, result]);

	const [display, setDisplay] = useState('none');
	return (
		<Box>
			<Flex justifyContent='space-between' h='70px'>
				<Flex align='center' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
					<NextLink href='/about' passHref>
						<Link fontSize='16px' fontWeight='500'>
							About
						</Link>
					</NextLink>
					<div>
						{result.length > 0 && (
							<Accordion
								w={['250px', '300px', '300px']}
								bg='#ffffff'
								borderRadius='10px'
								m={[1, 5, 5]}
								allowToggle
								position='absolute'
								top={['auto', '5px', '5px']}
								right={['10px', '20px', '20px']}
								zIndex='9999'>
								<AccordionItem>
									<AccordionButton>
										<Flex justifyContent='space-between' w='100%'>
											<Flex direction='column' w='100%' align='flex-start'>
												<Text fontSize='lg' fontWeight='500'>
													{result[0].name}
												</Text>
												<Text fontSize='sm' fontWeight='300'>
													{result[0].college}
												</Text>
											</Flex>
											<AccordionIcon h='48px' />
										</Flex>
									</AccordionButton>
									<AccordionPanel>
										<Center>
											<Button
												colorScheme='red'
												onClick={() => logout()}
												size='xs'
												m={1}
												variant='ghost'>
												Logout
											</Button>
										</Center>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						)}
					</div>
				</Flex>
				<Flex justifyContent='center' align='center'>
					<Center>
						<NextLink href='/home'>
							<Image
								src='/logo.svg'
								alt='bonding over bindings'
								cursor='pointer'
								h='30px'
							/>
						</NextLink>
					</Center>
				</Flex>
				<Flex align='center' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
					<Button border='2px' bgColor='#ffffff' borderRadius='0px'>
						User
					</Button>
				</Flex>

				<HamburgerIcon
					mt='auto'
					mb='auto'
					h={8}
					w={8}
					size='4xl'
					cursor='pointer'
					display={{ sm: 'flex', md: 'flex', lg: 'none' }}
					onClick={() => setDisplay('flex')}
					position=''
				/>
			</Flex>
			<Flex
				w='100vw'
				bgColor='#000000'
				h='100vh'
				pos='fixed'
				top='0'
				left='0'
				overflow='auto'
				zIndex={20}
				direction='column'
				display={display}>
				<Flex justifyContent='flex-end' w='100vw'>
					<CloseButton
						color='#ffffff'
						h={10}
						w={10}
						onClick={() => setDisplay('none')}
						mt='2%'
						mr='3%'
						ml='3%'
						size='lg'
					/>
				</Flex>
				<Flex direction='column' align='center'>
					<Flex align='center'>
						<NextLink href='/signup' passHref>
							<Button
								m={5}
								variant='outline'
								color='white'
								_hover={{ bg: '#222222' }}
								colorScheme='blackAlpha'
								fontSize='2xl'>
								User
							</Button>
						</NextLink>
					</Flex>
					<Flex>
						<NextLink href='/about' passHref>
							<Link fontSize='2xl' m={5} color='white'>
								About
							</Link>
						</NextLink>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
