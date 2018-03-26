const getUser = async (name) => {
  const user = await getUserByName(name);
  const account = await getUserAccountById(user.id);
  return account;
}

const myUser = getUser('endah');