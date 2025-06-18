describe('Stylish To-Do App', () => {
  it('should add a task', async () => {
    await browser.url('/Users/melody/cp-todo-app/index.html'); // Change this!

    const input = await $('#new-task');
    await input.setValue('Walk the dog');

    const addButton = await $('button');
    await addButton.click();

    const task = await $('li span');
    await expect(task).toHaveText('Walk the dog');
  });
});
