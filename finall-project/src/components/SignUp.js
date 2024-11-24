import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, login } from "../features/user/userSlice";


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
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const { register, handleSubmit } = useForm()
    const dis = useDispatch()
    const user = useSelector(x => x.user.currentUser)
    const nav = useNavigate()

    const submit = async (data) => {
        await dis(addNewUser(data))
        await dis(login(data.password))
        nav("/")

    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return <>
        <fieldset className="logWarp">
            <legend>צור חשבון</legend>
            <form onSubmit={handleSubmit(submit)} >
                <div align="center">

                    <p>
                        <TextField id="outlined-basic" label="שם משתמש" variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }}  {...register("name", { required: true })} />
                    </p>

                    <p>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" color="secondary">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                                            color="secondary"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </p>

                    <p>
                        <TextField id="outlined-basic" label="ת.ז." variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }} {...register("tz", { required: true })} />
                    </p>

                    <p>
                        <TextField id="outlined-basic" label="טלפון" variant="outlined" color="secondary" sx={{ m: 1, width: '25ch' }} {...register("telephone", { required: true })} />
                    </p>

                    <p>
                        <Button type="submit" variant="contained" color="secondary" sx={{ backgroundColor: "rebeccapurple", width: '25ch' }}>הרשם</Button>
                    </p>
                </div>
            </form>
        </fieldset>
    </>




}