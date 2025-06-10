// headeer nav-bar
const btns = document.querySelectorAll(".btn");

btns.forEach( Element => {
    Element.addEventListener("click", function () {
        btns.forEach( btn => btn.classList.remove("active"));
        Element.classList.toggle("active");
    })
});
// dark 

document.querySelector("#mess").addEventListener("click", function (){
    document.body.classList.toggle("dark-mode");
});

// translate

// chọn nút để add event
// para là những đoạn văn
// tìm trong các para, thêm thuộc tính none vô hết
document.querySelector("#tran").addEventListener("click", function(){
    let vi = document.querySelector("#vi");
    let na = document.querySelector("#na");

    if(vi.classList.contains("none")){
        vi.classList.remove("none");
        na.classList.add("none");
    } else if( na.classList.contains("none")){
        vi.classList.add("none");
        na.classList.remove("none")
    }
})
// search
function searchData() {
    // lấy dữ liệu
    let dataUser = document.querySelector("#input-data").value.trim().toLowerCase();
    // xử lý chuỗi rỗng 
    if (dataUser === ""){
        alert("chưa nhập gì kìa bà");
        return;
    }
        // duyệt tất cả các phần tử
    const datas = document.body.querySelectorAll("*");
    // xử lý nếu phần tử đang bị ẩn
    for(const el of datas) {
        const style = window.getComputedStyle(el);
        if(style.display === "none" || style.visibility === "hiden") continue;
    }
        

    //  chuẩn hóa
    // bỏ qua các phần tử xàm thẻ img, thẻ script...
    // cuộn đén vị trí đó hoạt thông báo không tìm thấy


}