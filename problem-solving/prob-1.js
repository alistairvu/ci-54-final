const arr1 = [1, 2, "a"]
const arr2 = [1, 3, "b"]

const notDuplicate = (arr1, arr2) => {
  const allElements = arr1.concat(arr2)
  const duplicates = arr1.filter((x) => arr2.indexOf(x) !== -1)
  const result = allElements.filter((x) => duplicates.indexOf(x) === -1)
  return result
}

console.log(notDuplicate(arr1, arr2))
