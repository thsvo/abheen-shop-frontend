export async function loadCategory() {
  const res = await fetch('http://localhost:5000/api/category/show')
  const data = await res.json();
  return data
}