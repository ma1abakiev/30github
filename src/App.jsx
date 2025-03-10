import { useEffect, useState } from 'react'
import CardList from './components/CardList'
import Filter from './components/Filter'
import Header from './components/Header'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [active, setActive] = useState('Закуски')

  useEffect(() => {
    axios
      .get('https://678aa006dd587da7ac2ae311.mockapi.io/data')
      .then((response) => setData(response))
  }, [])

  let filteredData = data?.data?.filter(
    (item) => item.category == active.toLocaleLowerCase()
  )

  return (
    <>
      <Header></Header>
      <Filter active={active} setActive={setActive}></Filter>
      <CardList data={filteredData} title={active}></CardList>
    </>
  )
}

export default App
