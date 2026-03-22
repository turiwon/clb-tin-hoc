document.addEventListener("DOMContentLoaded", function() {
    console.log("Website đã tải xong!");

    // Xử lý form liên hệ
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            alert("Gửi thông tin thành công!");
        });
    }
});
