import MyCard from './Card'

const CardList = ({ data, title }) => {
  return (
    <section className="p-10">
      <h2 className="text-[40px] font-semibold mt-10 ">{title}</h2>
      <div className="mt-10 grid grid-cols-3 gap-[30px]">
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <MyCard {...item}></MyCard>
            </div>
          ))}
      </div>
    </section>
  )
}

export default CardList
