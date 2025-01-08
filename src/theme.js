import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', 
        primary: {
            main: '#007bff', 
        },
        secondary: {
            main: '#f50057', 
        },
        background: {
            default: '#f4f4f4', 
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', 
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#333', 
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            color: '#007bff', 
        },
        body1: {
            color: '#555', 
            fontSize: '1rem',
        },
    },
    spacing: 8, 
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', 
                    textTransform: 'none', 
                    padding: '10px 20px', 
                },
                containedPrimary: {
                    backgroundColor: '#007bff',
                    '&:hover': {
                        backgroundColor: '#0056b3', 
                    },
                },
                containedSecondary: {
                    backgroundColor: '#f50057',
                    '&:hover': {
                        backgroundColor: '#c51162', 
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#007bff', 
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: '16px', 
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px', 
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h3: {
                    marginBottom: '16px', 
                },
            },
        },
    },
});

export default theme;
