// Function taskFirst to instantiate variables using const
// Function taskNext to instantiate variables using let

export function taskFirst() {
  const task = 'I prefer const when I can.';  // Replaced var with const
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';  // Replaced var with let
  combination += getLast();  // combination is updated, so let is appropriate here

  return combination;
}
