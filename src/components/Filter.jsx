import { Container } from '@mui/material'
import img1 from '../assets/img/nav/1.png'
import img2 from '../assets/img/nav/2.png'
import img3 from '../assets/img/nav/3.png'
import img4 from '../assets/img/nav/4.png'
import img5 from '../assets/img/nav/5.png'
import img6 from '../assets/img/nav/6.png'
import img7 from '../assets/img/nav/7.png'
import img8 from '../assets/img/nav/8.png'
import img9 from '../assets/img/nav/9.png'

const Filter = ({ setActive, active }) => {
  const categories = [
    {
      title: 'Бургеры',
      img: img1,
      active: true,
    },
    {
      title: 'Закуски',
      img: img2,
    },
    {
      title: 'Хот-доги',
      img: img3,
    },
    {
      title: 'Комбо',
      img: img4,
    },
    {
      title: 'Шаурма',
      img: img5,
    },
    {
      title: 'Пицца',
      img: img6,
    },
    {
      title: 'Вок',
      img: img7,
    },
    {
      title: 'Десерты',
      img: img8,
    },
    {
      title: 'Соусы',
      img: img9,
    },
  ]

  return (
    <Container maxWidth="lg" className="flex justify-between mt-[40px]">
      {categories.map((category, i) => (
        <div
          key={i}
          className="flex items-center gap-[8px] bg-[#c0c0c0]
          py-[9px] px-[14px] rounded-[50px] cursor-pointer duration-100  ease-in"
          style={{
            background: category.title == active && '#FFAB08',
          }}
          onClick={() => setActive(category.title)}
        >
          <img src={category.img} alt="" />
          <span>{category.title}</span>
        </div>
      ))}
    </Container>
  )
}

export default Filter
