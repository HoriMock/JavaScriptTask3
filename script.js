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

  // todoリストのオブジェクトを生成
  const todo = {
    id: id,
    comment: comment,
    workStatus: "作業中",
  };

  // オブジェクトを配列に格納
  tasks.push(todo);
  radioSelect();
  newTask.value = "";
});

// 追加したtodoリストを表示する関数
const showTodo = (selectTasks) => {
  while (tBody.firstChild) {
    tBody.textContent = "";
  }
  // 配列を処理
  selectTasks.forEach((selectTask) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdComment = document.createElement("td");
    const tdWorkStatus = document.createElement("td");
    const tdDeleteButton = document.createElement("td");

    tdId.textContent = selectTask.id;
    tdComment.textContent = selectTask.comment;

    tBody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdComment);
    tr.appendChild(tdWorkStatus);
    tdWorkStatus.appendChild(createStatusButton(selectTask));
    tr.appendChild(tdDeleteButton);
    tdDeleteButton.appendChild(createDeleteButton(tr));
  });
};

// 削除機能を管理する関数
const createDeleteButton = (tr) => {
  let index = tr.rowIndex - 1;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    tasks.splice(index, 1);
    tasks.reduce((id, task) => (task.id = id + 1), -1);
    showTodo(tasks);
  });
  return deleteButton;
};

// 作業ステータスを管理する関数
const createStatusButton = (task) => {
  const statusButton = document.createElement("button");
  statusButton.textContent = task.workStatus;
  statusButton.addEventListener("click", () => {
    if (task.workStatus === "作業中") {
      task.workStatus = "完了";
    } else {
      task.workStatus = "作業中";
    }
    showTodo(tasks);
  });
  return statusButton;
};

// ラジオボタンにチェックされている作業ステータスでフィルタリングする機能を管理する関数
const radioSelect = () => {
  const radioButtonAll = document.getElementById("all-select");
  const radioButtonWorking = document.getElementById("working-select");
  const radioButtonComplete = document.getElementById("complete-select");

  if (radioButtonAll.checked) {
    return showTodo(tasks);
  } else if (radioButtonWorking.checked) {
    const filterWorking = tasks.filter((todo) => {
      return todo.workStatus === "作業中";
    });
    return showTodo(filterWorking);
  } else if (radioButtonComplete.checked) {
    const filterComplete = tasks.filter((todo) => {
      return todo.workStatus === "完了";
    });
    return showTodo(filterComplete);
  }
};
