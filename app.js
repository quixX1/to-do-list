const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const taskList = document.getElementById('taskList');

// 1. Görev Ekleme Mantığı
addBtn.addEventListener('click', function() {
    const text = taskInput.value.trim();

    if (text !== "") {
        // Yeni bir <li> oluştur
        const li = document.createElement('li');
        li.textContent = text + " ";

        // Her görev için bir "Sil" butonu oluştur
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove";

        // Sil butonuna tıklandığında sadece o görevi sil
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Sil butonunu <li>'nin içine ekle
        li.appendChild(deleteBtn);

        // <li>'yi ana listeye (<ul>) ekle
        taskList.appendChild(li);

        // Input'u temizle ve odaklan
        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("You can not add a blank text!");
    }
});

/* bütün li'leri silen kısım*/
 clearAllBtn.addEventListener("click", function() {
if (taskList.children.length > 0 ) {
taskList.innerHTML = "";

}

else {
alert("The list already clear!");
}


 });          



  
        
