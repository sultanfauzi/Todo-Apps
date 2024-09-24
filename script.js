const inputTask = document.getElementById('task-input');
        const taskList = document.getElementById('list-container');
        const addButton = document.getElementById('add-button');
        let warningMessage;

        function checkInput() {
            // Mengaktifkan tombol jika input tidak kosong
            addButton.disabled = inputTask.value.trim() === '';  
            // Menghapus pesan peringatan saat pengguna mengetik
            if (warningMessage) {
                warningMessage.remove();  
                warningMessage = null;
            }
        }
        
        function addTask() {
            // Jika input kosong
            if (inputTask.value === '') {
                if (!warningMessage) { // Cek jika pesan peringatan belum ada
                    warningMessage = document.createElement('p');
                    warningMessage.textContent = "You must enter a task!";
                    taskList.appendChild(warningMessage);
                    warningMessage.style.color = 'red';
                    warningMessage.style.fontStyle = 'italic';
                }
                addButton.disabled = true; // Menonaktifkan tombol
                return; // Keluar dari fungsi
            }

            // Jika input valid, tambahkan tugas
            let li = document.createElement("li");
            li.innerHTML = inputTask.value;
            taskList.appendChild(li);
            inputTask.value = '';
            let spanElement = document.createElement("span");
            spanElement.innerHTML = '\u00d7';
            li.appendChild(spanElement);
            addButton.disabled = false; // Mengaktifkan tombol kembali
        }

        taskList.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
            }
            if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
            }
        });

   ;