import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@mui/material";

const Search = ({ value, onChange }) => {
  return (
    <TextField sx={{mt:"20px", width:"270px"}}
      variant="outlined"
      value={value}
      onChange={onChange}
      label="Search for an author..."
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
