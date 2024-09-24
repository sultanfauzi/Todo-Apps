const inputTask = document.getElementById('task-input');
        const taskList = document.getElementById('list-container');
        const addButton = document.getElementById('add-button');
        let warningMessage;

        function checkInput() {
            addButton.disabled = inputTask.value.trim() === '';  
            if (warningMessage) {
                warningMessage.remove();  
                warningMessage = null;
            }
        }
        
        function addTask() {
            if (inputTask.value === '') {
                if (!warningMessage) { 
                    warningMessage = document.createElement('p');
                    warningMessage.textContent = "You must enter a task!";
                    taskList.appendChild(warningMessage);
                    warningMessage.style.color = 'red';
                    warningMessage.style.fontStyle = 'italic';
                }
                return; 
            }

            // Jika input valid, tambahkan tugas
            let li = document.createElement("li");
            li.innerHTML = inputTask.value;
            taskList.appendChild(li);
            inputTask.value = '';
            let spanElement = document.createElement("span");
            spanElement.innerHTML = '\u00d7';
            li.appendChild(spanElement);
            addButton.disabled = false;
        }

        taskList.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
            }
            if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
            }
        });

 