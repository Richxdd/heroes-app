import { heroes } from '../components/data/heroes'

export const getHeroByName = (name = '') => {
  console.log('getHeroByName called')

  if (name.length === 0) {
    return []
  }

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  )
}
