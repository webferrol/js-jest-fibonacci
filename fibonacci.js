/**
 * Función que retorna la serie de Fibonacci
 * @param {number} serieValue Número items para mostrar en la serie
 * @returns {string} Serie de Fibonacci separado por comas
 */
function fibonacci (serieValue) {
  if (serieValue === 0) return 0

  const secuence = [1, 1]

  for (let i = 2; i < serieValue; i++) {
    secuence.push(secuence[i - 1] + secuence[i - 2])
  }

  secuence.length = serieValue
  secuence.unshift(0)

  return secuence.join()
}

module.exports = fibonacci
