const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const taskList = document.getElementById('taskList');

// 1. Tarayıcı hafızasındaki verileri çek
let tasks = JSON.parse(localStorage.getItem("yapilacaklar")) || [];

// Listeyi localStorage'a kaydeden yardımcı fonksiyon
function saveTasks() {
    localStorage.setItem("yapilacaklar", JSON.stringify(tasks));
}

// Ekrana tek bir <li> elemanı basan yardımcı fonksiyon
function renderTask(text) {
    const li = document.createElement('li');
    li.textContent = text + " ";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
        
        // Silinen görevi diziden de çıkar ve hafızayı güncelle
        const index = tasks.indexOf(text);
        if (index > -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// 2. Sayfa ilk açıldığında kayıtlı görevleri ekrana çiz
tasks.forEach(function(taskText) {
    renderTask(taskText);
});

// 3. Görev Ekleme Mantığı
addBtn.addEventListener('click', function() {
    const text = taskInput.value.trim();

    if (text !== "") {
        tasks.push(text);      // Dizinin içine ekle
        saveTasks();           // localStorage'a kaydet
        renderTask(text);      // Ekrana bas

        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("You can not add a blank text!");
    }
});

// 4. Bütün listeyi silen kısım
clearAllBtn.addEventListener("click", function() {
    if (taskList.children.length > 0) {
        taskList.innerHTML = "";
        tasks = [];            // Diziyi sıfırla
        saveTasks();           // Hafızayı güncelle
    } else {
        alert("The list already clear!");
    }
});