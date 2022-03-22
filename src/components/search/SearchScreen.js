import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroByName } from '../../selectors/getHeroByName'
import HeroCard from '../hero/HeroCard'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'

const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [{ searchText }, handleInputChange, reset] = useForm({ searchText: q })

  const heroesfileted = useMemo(() => getHeroByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <div>
      <h1>Búsquedas</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Buscar un héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button type='submit' className='btn btn-outline-primary mt-2 '>
              Buscar...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          <div className='heroes2'>
            {q === '' ? (
              <div className='alert alert-info'>Buscar un héroe</div>
            ) : (
              heroesfileted.length === 0 && (
                <div className='alert alert-danger'>No hay resultados: {q}</div>
              )
            )}
            {heroesfileted.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchScreen
