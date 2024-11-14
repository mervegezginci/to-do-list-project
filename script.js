var list = document.querySelector(".btn-add");

list.addEventListener("click", listClick);

function listClick() {
    // input değerini alır
    const inputValue = document.getElementById("input").value.trim();

    // input boş değilse
    if (inputValue !== "") {
        // yeni bir liste ögesi (li) oluştur
        const listItem = document.createElement("li");
        listItem.classList.add("li-list");

        const text = document.createElement("span");
        text.textContent = inputValue;
        listItem.appendChild(text);

        // liste ögesine bir silme butonu ekler
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("btn-delete");
        listItem.appendChild(deleteBtn);


        // listeyi seçer ve liste öğesini en üste ekler
        const listContainer = document.querySelector(".list ul");
        listContainer.prepend(listItem);

        // input alanını temizler
        document.getElementById("input").value = "";


        // silme fonksiyonu 
        deleteBtn.addEventListener("click", function () {
            const modal = document.getElementById("deleteModal");
            modal.style.display = "flex"; // modal ı göster

            const confirmDelete = document.getElementById("confirmDelete");
            const cancelDelete = document.getElementById("cancelDelete");

            // evet butonuna basınca ögeyi sil ve modal'ı kapat
            confirmDelete.onclick = function () {
                listItem.remove();
                modal.style.display = "none";
            };

            // hayır butonuna basınca sadece modal'ı kapat
            cancelDelete.onclick = function () {
                modal.style.display = "none";
            };
        });

        // liste ögesine tıklanıldığında üstü çizili olur ve en alta taşır, sadece liste öğesinin üzerine tıklanınca
        listItem.addEventListener("click", function (event) {
            // X butonuna tıklanıp tıklanmadığını kontrol et
            if (event.target !== deleteBtn) {
                listItem.classList.toggle("completed");
            }
        })

    }
    else {
        alert("Lütfen Bir Görev Girin."); // eğer input boşsa uyarı verir
    }

    // modal'ı dışarı tıklayarak kapatma
    window.onclick = function (event) {
        const modal = document.getElementById("deleteModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}