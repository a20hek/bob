import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import 'focus-visible/dist/focus-visible';
// import { UserContextProvider } from '../lib/UserContext';
// import { supabase } from '../utils/supabaseClient';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			{/* <UserContextProvider supabaseClient={supabase}> */}
			<Component {...pageProps} />
			{/* </UserContextProvider> */}
		</ChakraProvider>
	);
}

export default MyApp;
