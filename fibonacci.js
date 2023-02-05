/**
 * This function returns numbers of Fibonacci
 * @param {number} serieValue Number of items to display in the Fibonacci series
 * @returns {string} Fibonacci series separated by commas
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
