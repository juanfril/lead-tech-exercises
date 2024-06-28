import { promisify } from 'util'
import { Library } from './library'

export const getLibraryData = promisify(Library.get)

;(async () => {
  try {
    const libraryData = await getLibraryData('valid_key')
    console.log(libraryData)
  } catch (e) {
    console.error(e)
  }
})()

/**
 * Este wrapper utiliza una implementacion nativa de node. Las ventajas de hacerlo asi:
 * - Simplicidad: Reduce la cantidad de codigo
 * - Mantenibilidad: Facil de mantener, menos propenso a errores
 * - Estandarizacion: Utiliza una funcion estandar de Node.js, puede mejorar legibilidad y consistencia del codigo
 */
