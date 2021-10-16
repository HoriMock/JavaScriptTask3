"use strict";

const tBody = document.getElementById("t-body");
const newTask = document.getElementById("newTask");
const addTask = document.getElementById("addTask");
const tasks = [];

addTask.addEventListener("click", () => {
  // 入力欄が空なら返す
  if (newTask.value === "") {
    return;
  }
  //tbodyの中の要素の数を取得し連番を取得する
  const id = tBody.children.length;

  // コメントの値を取得する
  const comment = newTask.value;

  // 作業中ボタンを表示する
  const workStatus = document.createElement("button");
  workStatus.textContent = "作業中";

  // 削除ボタンを表示する
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  // todoリストのオブジェクトを生成
  const todo = {
    id: id,
    comment: comment,
    workStatus: workStatus,
    deleteButton: deleteButton,
  };

  // オブジェクトを配列に格納
  tasks.push(todo);
  showTodo();
  newTask.value = "";
});

const showTodo = () => {
  while (tBody.firstChild) {
    tBody.textContent = "";
  }
  // 配列を処理
  tasks.forEach((task) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdComment = document.createElement("td");
    const tdWorkStatus = document.createElement("td");
    const tdDeleteButton = document.createElement("td");

    tdId.textContent = task.id;
    tdComment.textContent = task.comment;
    const statusButton = task.workStatus;
    const deleteBtn = task.deleteButton;

    tBody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdComment);
    tr.appendChild(tdWorkStatus);
    tdWorkStatus.appendChild(statusButton);
    tr.appendChild(tdDeleteButton);
    tdDeleteButton.appendChild(deleteBtn);
  });
};
