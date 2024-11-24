import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function UserDetails({ oneUser }) {

    return <>
        <TableRow  hover role="checkbox" tabIndex={-1}
            key={oneUser.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" align="right">
            {oneUser.id}
               
            </TableCell>
            <TableCell align="right"> {oneUser.name}</TableCell>
            <TableCell align="right">{oneUser.tz}</TableCell>
            <TableCell align="right">{oneUser.password}</TableCell>
            <TableCell align="right"> {oneUser.telephone}</TableCell>
        </TableRow>
    </>
    // return <div>
    //     <h1>{oneUser.name}</h1>
    //     <p>id: {oneUser.id}</p>
    //     <p>tz: {oneUser.tz}</p>
    //     <p>password: {oneUser.password}</p>
    //     <p>telephone: {oneUser.telephone}</p>

    // </div>
}