import { useParams } from 'react-router-dom'
import { Container } from '../components'
import { Link, useNavigate } from 'react-router-dom'

function CategoriesDetailProducts() {

  const { category, subcategory } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <Container>
          <div className='w-full flex gap-3 text-gray-500  mt-16 pt-2'>
            <Link to={'/'} className='hover:text-black'>
              Home
            </Link>
            <span>&#10217;</span>
            <button disabled={!subcategory ? true : false} onClick={() => navigate(``)} className={`${subcategory ? 'hover:text-black' : 'text-emerald-400'}`}>
              {category}
            </button>
            {
              subcategory &&
              <>
                <span>&#10217;</span>
                <button disabled={true} className={`text-emerald-400`}>
                  {subcategory}
                </button>
              </>
            }

          </div>
      </Container>
      <div className='w-full py-7 my-16 bg-yellow-400 text-3xl text-center'>
        Category {subcategory ? subcategory : category} Detail Products
      </div>
    </>
  )
}

export default CategoriesDetailProducts