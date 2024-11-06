{
  type Tperson = {
    name: string;
    age: number;
    email: string;
  };
  const updateProfile = (obj: Tperson, age: { age: number }): Tperson => {
    obj.age = age.age;
    return obj;
  };
  const person: Tperson = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  const result = updateProfile(person, {age:26});
  console.log(result)
}
