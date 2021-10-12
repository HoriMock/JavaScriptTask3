const newTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");

addTask.addEventListener("click", () => {
  // 入力欄が空なら返す
  if (newTask.value === "") {
    return;
  }

  //tbodyの中の要素の数を取得し連番を取得する
  const tBody = document.getElementById("t-body");
  const id = tBody.children.length;

  // コメントの値を取得する
  const comment = newTask.value;

  // 作業中ボタンを表示する
  const workStatus = document.createElement("button");
  workStatus.innerText = "作業中";

  // 削除ボタンを表示する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // テーブルに表示する配列に格納
  const todos = [id, comment, workStatus, deleteButton];

  // テーブルの行を用意
  const tr = document.createElement("tr");

  // 配列を処理する
  todos.forEach((todo) => {
    // テーブルの列を用意
    const td = document.createElement("td");

    if (todo instanceof HTMLElement) {
      // buttonタグの場合
      td.appendChild(todo);
    } else {
      td.textContent = todo;
    }

    // 行に列を追加する
    tr.appendChild(td);
  });

  // テーブルの行を追加する
  tBody.appendChild(tr);

  // 入力欄を空にする
  newTask.value = "";
});
