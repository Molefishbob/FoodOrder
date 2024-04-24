export async function fetchAvailableMeals() {
  const res = await fetch("http://localhost:3000/meals");
  const resData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }

  return resData;
}
