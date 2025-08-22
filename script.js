
    function addTask() {
      var input = document.getElementById("todoInput");
      var value = input.value.trim();

      if (value === "") {
        alert("Please enter something!");
        return;
      }

      var ul = document.getElementById("todoList");
      var li = document.createElement("li");

      // span for text
      var span = document.createElement("span");
      span.innerHTML = value;
      li.appendChild(span);

      // actions div
      var actions = document.createElement("div");
      actions.className = "actions";

      // edit button
      var editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.className = "edit";
      editBtn.onclick = function() {
        var inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.value = span.innerHTML;
        inputBox.className = "edit-input";

        li.replaceChild(inputBox, span);
        editBtn.style.display = "none";

        var saveBtn = document.createElement("button");
        saveBtn.innerHTML = "Save";
        saveBtn.className = "save";
        saveBtn.onclick = function() {
          span.innerHTML = inputBox.value;
          li.replaceChild(span, inputBox);
          saveBtn.remove();
          editBtn.style.display = "inline-block";
        };
        actions.insertBefore(saveBtn, deleteBtn);
      };
      actions.appendChild(editBtn);

      // delete button
      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.onclick = function() {
        ul.removeChild(li);
      };
      actions.appendChild(deleteBtn);

      li.appendChild(actions);
      ul.appendChild(li);

      input.value = "";
    }

    // Enter key support
    document.getElementById("todoInput").onkeypress = function(e) {
      if (e.keyCode === 13) {
        addTask();
      }
    };