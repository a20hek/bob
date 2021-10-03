import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import { Button, Heading, Text, Flex, Center } from '@chakra-ui/react';

export default function NotLoggedin() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<>
			{loading ? null : (
				<Flex direction='column' align='center' mt='10%'>
					<Center>
						<Heading>You&apos;re not logged in</Heading>
					</Center>
					<Center>
						<Text>Click here to redirect to the login page</Text>
					</Center>
					<br />
					<Center>
						<Button
							bgColor='#0EB500'
							_hover={{ bg: '#13DA01' }}
							textColor='#ffffff'
							onClick={() => Router.push('/login')}>
							Login
						</Button>
					</Center>
				</Flex>
			)}
		</>
	);
}
