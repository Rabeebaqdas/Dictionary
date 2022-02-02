import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import categories from '../data/category';
const Header = ({ category, setcategory, word, setword , mode}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: mode ? "#000" : "#fff"
      },
      type:mode ? "light" : 'dark',
    },

  });

  const handleChange = (lang) => {
    setcategory(lang);
    setword("");
  }
  return (
    <div className='header'>
      <span className='title'>{word == "" ? "Word Hunt" : word}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" className="search" label="Search a word" value={word} onChange={(e) => setword(e.target.value)} />

          <TextField
            id="standard-select-currency"
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >

            {categories.map((items) => (
              <MenuItem key={items.label} value={items.label}>
                {items.value}
              </MenuItem>
            ))}

          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
};

export default Header;
