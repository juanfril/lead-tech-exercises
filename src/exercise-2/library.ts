// He creado una implementacion de Library para que se vea funcionar
export const Library = {
  get: (key, callback) => {
    setTimeout(() => {
      if (key === 'valid_key') {
        callback(null, { data: 'Library data for key: ' + key })
      } else {
        callback(new Error('Invalid key'))
      }
    }, 1000)
  },
}

// Tambien he creado 2 wrappers con diferentes implementaciones en archivos diferentes
