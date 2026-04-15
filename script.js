function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const btn = document.createElement("button");
  btn.textContent = "X";

  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
}
