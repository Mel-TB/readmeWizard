import inquirer from "inquirer";

export async function promptForList(promptMessage: string, key: string) {
  const items = [];
  let addItem = true;

  while (addItem) {
    const { item } = await inquirer.prompt({
      type: "input",
      name: "item",
      message: `${promptMessage} (or just press enter to finish)`,
    });

    if (item) {
      items.push(item);
    } else {
      addItem = false;
    }
  }
  return items;
}
