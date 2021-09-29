import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

function Footer() {
	return (
		<Box bg='#3c3c3c' pr='10%' pl='10%'>
			<Flex justifyContent='space-between' h='48px'>
				<Flex align='center'>
					<Text fontSize='12px' fontWeight='thin' mr='60px' textColor='white'>
						Copyright © 2021 Bonding Over Bindings
					</Text>
				</Flex>
				<Flex justifyContent='center' align='center'>
					<NextLink href='/#'>
						<Image
							src='/logo-w.svg'
							alt='bonding over bindings'
							cursor='pointer'
							h='20px'
						/>
					</NextLink>
				</Flex>
			</Flex>
		</Box>
	);
}

export default Footer;
