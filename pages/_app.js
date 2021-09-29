import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import 'focus-visible/dist/focus-visible';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
