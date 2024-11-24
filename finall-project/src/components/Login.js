

import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { login, setIsAdmin } from "../features/user/userSlice";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import './styleShit.css';
import { useNavigate } from "react-router-dom";


export default function Login() {

    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const user = useSelector(x => x.user.currentUser)
    const nav = useNavigate()


    const submit = async (data) => {
        let { name } = data;
        let { password } = data;
        if (name == 1 && password == 1) {
            dis(setIsAdmin("admin"))
            nav("/")
        }

        else {
            let { payload } = await dis(login(password))
            console.log("status from login: ", payload)
            debugger
            if (payload == null)
                nav("/signup")
            else
                nav("/")
        }

    }


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return <>

        <fieldset className="logWarp">
            <legend>התחבר לחשבון </legend>
            <form onSubmit={handleSubmit(submit)} style={{ alignSelf: "center" }}>
                <div align="center" >
                    <div >
                        <p>
                            <TextField sx={{ m: 1, width: '25ch' }} id="name" label="user name" variant="outlined" color="secondary"  {...register("name", { required: true })} />
                        </p>
                        <p>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
                                <OutlinedInput
                                    {...register("password", { required: true })}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    color="secondary"
                                />
                            </FormControl>
                        </p>
                        <p>
                            <Button type="submit" variant="contained" color="secondary" sx={{ backgroundColor: "rebeccapurple", width: '25ch'}}>התחברות</Button>
                        </p>
                    </div>
                </div>
            </form>
        </fieldset>

    </>

}