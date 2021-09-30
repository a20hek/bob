import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { useForm } from 'react-hook-form';
import {
	Button,
	Input,
	FormControl,
	FormLabel,
	Stack,
	Center,
	Text,
	Container,
	Heading,
} from '@chakra-ui/react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Registration() {
	const [isLoggedin, setIsLoggedin] = useState(false);
	const { uid } = useFirebaseAuth();

	const router = useRouter();

	const { register, handleSubmit } = useForm();

	function updatenameandcollege(data, uid) {
		const userRef = doc(db, 'users', uid);
		return setDoc(userRef, data, { merge: true }).then(() => router.push('/home'));
	}

	return (
		<>
			<Head>
				<title>Registration</title>
			</Head>
			<Container centerContent>
				<Heading fontWeight='400' textAlign='center' mt='15%'>
					Welcome!
				</Heading>
				<Heading size='md' opacity='0.7' textAlign='center' mt={2}>
					It&apos;s great to have you here {':)'}
				</Heading>
				<Text fontWeight='500' opacity='0.5' textAlign='center' mt={10} mb={5}>
					Let&apos;s complete setting up your profile..
				</Text>
				<Stack as='form' onSubmit={handleSubmit((data) => updatenameandcollege(data, uid))}>
					<FormControl>
						<FormLabel htmlFor='name' opacity='0.7'>
							Enter your name
						</FormLabel>
						<Input
							isRequired
							placeholder='Vishy Anand'
							type='text'
							{...register('name')}
							w={['350px', '400px', '400px']}
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor='college' opacity='0.7'>
							Enter your college name
						</FormLabel>
						<Input
							isRequired
							w={['350px', '400px', '400px']}
							placeholder='Zugzwang College'
							type='text'
							{...register('college')}
						/>
					</FormControl>
					<Center>
						<Button
							type='submit'
							w='60%'
							mt={5}
							bg='#0EB500'
							borderColor='green.300'
							variant='outline'
							textColor='#ffffff'
							_hover={{ bg: '#13DA01' }}>
							Finish
						</Button>
					</Center>
				</Stack>
			</Container>
		</>
	);
}
