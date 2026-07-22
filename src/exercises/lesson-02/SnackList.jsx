function SnackList() {
  const snackList = [
    { rank: 3, name: 'chocolate' },
    { rank: 2, name: 'pizza' },
    { rank: 1, name: 'ice cream' },
  ];
  return (
    <ul>
      {snackList
        .toSorted((a, b) => a.rank - b.rank)
        .map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
    </ul>
  );
}

export default SnackList;
