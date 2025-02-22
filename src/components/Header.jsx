import { Container, Typography } from '@mui/material'
import logo from '../assets/img/Logo.png'
import intro from '../assets/img/intro.png'

const Header = () => {
  return (
    <header className="bg-[#FFAB08] h-[500px] rounded-b-[100%]">
      <Container maxWidth="lg">
        <div className="flex justify-center pt-[24px]">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center gap-[21px]">
          <div>
            <img src={intro} alt="" />
          </div>
          <div>
            <Typography
              variant="h1"
              className="!text-[50px] text-white max-w-[437px] font-extrabold "
            >
              Только самые
              <span className="text-[#FF5C00]"> сочные бургеры!</span>
            </Typography>
            <p className="text-white mt-[52px] ">Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
