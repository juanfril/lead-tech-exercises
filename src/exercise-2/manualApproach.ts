import { Library } from './library'

export const getLibraryData = (key) => {
  return new Promise((resolve, reject) => {
    Library.get(key, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

// Usamos el wrapper con async/await
;(async () => {
  try {
    const libraryData = await getLibraryData('valid_key')
    console.log(libraryData)
  } catch (e) {
    console.error(e)
  }
})()

/**
 * Este wrapper utiliza una implementacion manual. Las ventajas de hacerlo asi:
 * - Compatibilidad: No requiere dependecias
 * - Flexibilidad: Tienes control del manejo del error y los datos dentro de la promesa
 */
