import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './CardComponent.css'

const CardComponent = ({ productoData }) => {

  let cadena = productoData.Titulo.substring(0,20)

  return (
    <Card sx={{ maxWidth: 300, minWidth:200, }} variant="outlined" className='cardBig'>
      <CardMedia className= "imgcard"
        component="img"
        height="300px"
        alt={productoData.Titulo}
        image={productoData.Img}
      />
      <CardContent className='cardTamano'>
        <Typography className='productoTitulo' gutterBottom component="div">
          {cadena}...
        </Typography>
        <Divider />
        <Typography gutterBottom className='productoPrecio' component="div">
          $ {productoData.Precio}
        </Typography>
      </CardContent>
      <CardActions className='contenedor'>

      <NavLink className='navlink' to={`detail/${productoData.id}`}>
          <Button className='detalles' variant="contained" size="small">Detalles</Button>
      </NavLink>

      </CardActions>
    </Card>
  );
}

export default CardComponent;
