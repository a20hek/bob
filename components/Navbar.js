import React, { useState } from 'react';
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
import { HamburgerIcon } from '@chakra-ui/icons';
import Loginform from './Loginform';
import Router from 'next/router';

export default function Navbar() {
	const [display, setDisplay] = useState('none');
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box>
			<Flex justifyContent='space-between' h='70px'>
				<Flex align='center' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
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
						<Image
							src='/logo.svg'
							alt='bonding over bindings'
							cursor='pointer'
							h='30px'
						/>
					</NextLink>
				</Flex>
				<Flex align='center' display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
					<Button mr='60px' variant='ghost' onClick={onOpen}>
						Login
					</Button>
					<Button border='2px' bgColor='#ffffff' borderRadius='0px'>
						Sign Up
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
								onClick={() => Router.push('/signup')}
								fontSize='2xl'>
								Signup
							</Button>
						</NextLink>
					</Flex>
					<Flex align='center'>
						<Button
							m={5}
							color='white'
							variant='ghost'
							_hover={{ bg: '#222222' }}
							colorScheme='blackAlpha'
							fontSize='2xl'
							onClick={onOpen}>
							Login
						</Button>
					</Flex>
					<Flex>
						<NextLink href='/month' passHref>
							<Link m={5} color='white' fontSize='2xl'>
								This Month&apos;s Books
							</Link>
						</NextLink>
					</Flex>
					<Flex>
						<NextLink href='/about' passHref>
							<Link fontSize='2xl' m={5} color='white'>
								About
							</Link>
						</NextLink>
					</Flex>
					<Modal isOpen={isOpen} onClose={onClose} width={['', '', '100%']}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader mt={3}>
								<Text textAlign='center' fontSize='xl' fontWeight='300'>
									Login
								</Text>
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Loginform />
							</ModalBody>
							<ModalFooter m='auto'>
								<NextLink href='/signup'>
									<Link>
										<Text as='u' fontSize='xs' opacity='80%'>
											New Here? Register
										</Text>
									</Link>
								</NextLink>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Flex>
			</Flex>
		</Box>
	);
}
