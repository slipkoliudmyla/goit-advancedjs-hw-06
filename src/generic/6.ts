type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  // Реалізація збереження користувача не входить до завдання на типізацію.
}

createOrUpdateUser({ email: 'learner@example.com' });

export { createOrUpdateUser };
export type { User };
