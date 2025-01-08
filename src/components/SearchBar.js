import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 2,
                gap: 2,
                flexWrap: 'wrap',
            }}
        >
            <TextField
                label="Search for an Item"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{
                    width: { xs: '100%', sm: 'auto' },
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '20px',
                    },
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{
                    padding: '10px 20px',
                    fontWeight: 'bold',
                    borderRadius: '20px',
                    backgroundColor: '#007bff',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                        transform: 'scale(1.05)',
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
