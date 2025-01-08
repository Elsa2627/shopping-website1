import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // Mode clair par défaut (peut être changé en 'dark' pour le mode sombre)
        primary: {
            main: '#007bff', // Bleu pour les éléments principaux (boutons, liens)
        },
        secondary: {
            main: '#f50057', // Couleur secondaire (ex: boutons de suppression)
        },
        background: {
            default: '#f4f4f4', // Couleur d'arrière-plan par défaut pour le site
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Police principale pour le site
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#333', // Couleur des titres principaux
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            color: '#007bff', // Utilisation du bleu pour les sous-titres
        },
        body1: {
            color: '#555', // Texte principal du site
            fontSize: '1rem',
        },
    },
    spacing: 8, // Gestion de l'espacement global basé sur des unités de 8px
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Coins arrondis pour les boutons
                    textTransform: 'none', // Suppression de la capitalisation automatique des boutons
                    padding: '10px 20px', // Espacement interne des boutons
                },
                containedPrimary: {
                    backgroundColor: '#007bff',
                    '&:hover': {
                        backgroundColor: '#0056b3', // Couleur plus foncée au survol
                    },
                },
                containedSecondary: {
                    backgroundColor: '#f50057',
                    '&:hover': {
                        backgroundColor: '#c51162', // Couleur plus foncée au survol pour le secondaire
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#007bff', // Bleu pour la barre de navigation
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: '16px', // Espacement entre les champs de texte
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px', // Coins arrondis pour les cartes de produit
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Ombre douce pour les cartes
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h3: {
                    marginBottom: '16px', // Espace sous les titres
                },
            },
        },
    },
});

export default theme;
