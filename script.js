const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const general = document.querySelectorAll('.general');
const expandButton = document.querySelector('.expand');
expandButton.addEventListener('click', expand);

function Validation() {
    const emailInput = document.querySelector('.email').value;
    const statusMessage = document.querySelector('.status');

    if (regex.test(emailInput)) {
        statusMessage.textContent = 'Email hợp lệ!';
        statusMessage.style.color = 'green';
        setTimeout(() => {
        statusMessage.textContent = 'Đang mở khóa nội dung...';    
        statusMessage.style.color = 'blue';
        }, 500);
        setTimeout(() => {
            unlock();
        }, 1000); // Giả lập thời gian mở khóa nội dung    
    } else {
        statusMessage.textContent = 'Email không hợp lệ!';
        statusMessage.style.color = 'red';
    }    
}    

function unlock() {
    const content = document.querySelector('.content');
    content.style.display = 'block'; // Hiển thị nội dung
    content.style.opacity = '1'; // Đảm bảo nội dung có thể nhìn thấy
    content.style.transition = 'opacity 0.5s ease-in-out'; // Thêm hiệu ứng chuyển tiếp
    document.querySelector('.email').style.display = 'none'; // Ẩn trường nhập email
    document.querySelector('.info-3').style.display = 'none'; // Ẩn thông tin trạng thái
}    

for (let i = 0; i < general.length; i++) {
    general[i].addEventListener('click', function () {
        // Ẩn tất cả các chi tiết khác
        for (let j = 0; j < general.length; j++) {
            if (j !== i) {
                const otherDetails = general[j].querySelector('.collapse');
                otherDetails.style.display = 'none';
                const otherExpandBtn = general[j].querySelector('.expand');
                otherExpandBtn.innerHTML = '<span class="icon-down-circled">Details</span>';
                general[j].style.height = '200px';
            }
        }
        // Chuyển đổi hiển thị chi tiết của mục hiện tại
        const details = this.querySelector('.collapse');
        const expandBtn = this.querySelector('.expand');
        if (details.style.display === 'block') {
            details.style.display = 'none';
            expandBtn.innerHTML = '<span class="icon-down-circled">Details</span>';
            general[i].style.height = '200px';
        } else {
            details.style.display = 'block';
            expandBtn.innerHTML = '<span class="icon-up-circled">Hide Details</span>';
            general[i].style.height = (i === 0) ? '700px' : '500px';
        }
    });
}

function expand() {
    const expandText = document.querySelector('.expand-text');
    if (expandText.style.display === 'block') {
        expandText.style.display = 'none';
        this.innerHTML = '<span class="icon-down-circled">Details</span>';
    } else {
        expandText.style.display = 'block';
        this.innerHTML = '<span class="icon-up-circled">Hide Details</span>';
    }
}