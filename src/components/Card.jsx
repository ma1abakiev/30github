import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import img1 from '../assets/img/burgers/1.png'
import MyModal from './MyModal'
import { useState } from 'react'

export default function MyCard({ title, price, weight, img, text }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => handleOpen()}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={img ? img : img1}
            alt="burger"
            sx={{ width: '100%', height: 250, background: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {price}₽
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {title}
            </Typography>
            <div className="flex justify-start mt-[30px]">
              <span>{weight}г</span>
            </div>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className="w-full bg-[#F2F2F3]"
          >
            Добавить{' '}
          </Button>
        </CardActions>
      </Card>
      <MyModal
        open={open}
        handleClose={handleClose}
        title={title}
        price={price}
        weight={weight}
        img={img}
        text={text}
      ></MyModal>
    </>
  )
}
