import faker from 'faker/locale/ru'
// import { Appeals } from '~/data/DATA.js'

function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand)
  return rand
}

const tags = ['Готовится ответ', 'Решено']

const Appeals = Array.from({ length: 12 }, (_, idx) => ({
  id: idx + 1,
  tag: tags[randomInt(0, 1)],
  text: faker.lorem.words(),
  address: faker.address.streetAddress(),
}))

const News = Array.from({ length: 12 }, (_, idx) => ({
  id: idx + 1,
  text: faker.lorem.paragraph(),
  date: new Date(faker.date.past()).toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }),
}))

const Initiatives = Array.from({ length: 12 }, (_, idx) => ({
  id: idx + 1,
  text: faker.lorem.sentence(),
  date: new Date(faker.date.past()).toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }),
}))

export { randomInt, Appeals, News, Initiatives }
