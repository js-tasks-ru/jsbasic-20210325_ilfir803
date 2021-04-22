function showSalary(users, age) {
  let stroka = []
  for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.age <= age) {
      stroka.push(`${user.name}, ${user.balance}`)
    }
  }
  return stroka.join('\n')
}
