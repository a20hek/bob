import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '500px',
	md: '700px',
	lg: '950px',
});

const theme = extendTheme({
	fonts: {
		heading: 'Playfair Display',
		body: 'Poppins',
	},
});

export { theme, breakpoints };
