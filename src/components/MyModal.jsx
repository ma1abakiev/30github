import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function MyModal({
  handleClose,
  open,
  title,
  price,
  weight,
  img,
  text,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center">
            <Typography
              className="text-[40px] font-semibold"
              id="modal-modal-title"
              variant="h3"
              component="h2"
            >
              {title}
            </Typography>
            <IconButton onClick={handleClose}>
              <Close></Close>
            </IconButton>
          </div>
          <div className="flex gap-[16px] mt-[24px]">
            <img
              className="w-[276px] rounded-[16px] h-[220px]"
              src={
                img
                  ? img
                  : 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
              alt=""
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
          <div className="flex items-center justify-between mt-[40px]">
            <Button variant="contained" sx={{ backgroundColor: '#FF7020' }}>
              Добавить
            </Button>
            <span className="text-[24px] font-semibold">{price}₽</span>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
