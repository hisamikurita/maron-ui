export const fn = (user: { name: string }) => {
  console.log(`hello, ${user.name}!`);
};

fn({ name: 'john' });
