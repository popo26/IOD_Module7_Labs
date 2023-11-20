import { useState } from "react";
import { useContext } from "react";
import { UsernameContext } from "../context/UsernameContext";

import { TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";

export default function LoginPage() {
  const [username, setUsername] = useContext(UsernameContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="Login">
      {/* {isLoggedIn ? (
        <h3>You are logged in. You can access Bitcoin page</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <h5>Enter whatever username</h5>
          <label htmlFor="username" />
          Username
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      )} */}

      {isLoggedIn ? (
        <h3>You are logged in. You can access Bitcoin page</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue="Ai"
            sx={{ mr: 2 }}
            // value={username}
            // onChange={handleChange}
          />

          <Button variant="contained">Submit</Button>
        </form>
      )}
    </div>
  );
}
