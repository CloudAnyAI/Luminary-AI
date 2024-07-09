
 // script.js
function showModal() {
    var modal = document.getElementById("modaloffserver");
    var currentHour = new Date().getHours();
    
    if (currentHour >= 10 || currentHour < 6) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showModal();
    
    // Kiểm tra mỗi phút để cập nhật hiển thị modal nếu cần
    setInterval(showModal, 60000);
});
