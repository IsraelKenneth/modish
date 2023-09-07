import { Articlecard } from "../components"
import { Articledata } from "../constants"

const NewsArticle = () => {
  return (
    <section>
<div className=" mx-auto padding-y padding-x">
  <h1 className="font-playfair font-semibold md:text-10xl text-2xl text-gray-200 md:mb-10 MD:mb-4 MB-2">ARTICLES</h1>
  <div className="md:flex md:flex-row md:space-x-4">
    {Articledata.map((items) =>(
      <Articlecard 
        key={items.title}
        title={items.title}
        excerpt={items.excerpt}
        imageSrc={items.image}
      />
    ))}

  </div>
</div>
    </section>
  )
}

export default NewsArticle