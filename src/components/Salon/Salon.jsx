import React from 'react';
import './Salon.css';
import {Button} from "react-bootstrap";


export default function Salon(props) {

    return <tr key={props.salon.id}>
            <td>{props.salon.id}</td>
            <td>{props.salon.name}</td>
            <td/>
            <td/>
            <td>
                {
                    props && props.getConnected() && <Button variant="info" className="mr-2"
                                                             onClick={() => props.joinSalon(props.salon.id)}>Join</Button>
                }
                <Button variant="danger">Delete</Button>
            </td>
        </tr>
}
