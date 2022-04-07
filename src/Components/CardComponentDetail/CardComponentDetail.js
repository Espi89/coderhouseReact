import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RatingControlled from '../RatingControlled/RatingControlled';
import Counter from '../Counter/Counter';
import { NavLink } from 'react-router-dom';

import './CardComponentDetail.css'

const CardComponentDetail = ({ prodData }) => {
  return (

      


        <Card className='displayDetail' sx={{ maxWidth: 600 }}>
          <div className='contenedorImg'>
            <CardMedia className='cardmedia'
              component="img"
              alt={prodData.Titulo}

              image={prodData.Img}
            />
          </div>
          <div className='contenedorDatos'>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {prodData.Titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Categoria: {prodData.Categoria}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precio: $ {prodData.Precio}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cantidad en stock: {prodData.Stock}
              </Typography>
              <RatingControlled />
              <Counter />
            </CardContent>
            <CardActions>
              <div className='botones'>
                <NavLink to={`Carritoarrito/`}>
                  <Button className='addCarrito' size="small">+ Carrito</Button>
                </NavLink>
                {/* BOTONES OCULTOS */}
                <div className='botonesOcultos'>
                  <Button className='finalizarCompra' size="small">Pagar</Button>
                  <Button className='seguirComprando' size="small">Seguir Comprando</Button>
                </div>
              </div>
            </CardActions>
          </div>
        </Card>


  );
}

export default CardComponentDetail;