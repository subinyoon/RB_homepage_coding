window.onload = function () {


    $("#submit_btn").click(function () {
        const name = $("#studentName").val(),
            email = $("#studentEmail").val(),
            message = $("#studentContents").val();
        if (name == "" || email == "" || message == "") {
            alert("이름, 이메일, 문의 내용을 모두 입력해 주세요!");
            return;
        }

        if (!validateEmail(email)) {
            alert("연락 가능한 이메일을 작성해주세요");
            return;
        }
        //$(".loader").toggle();

        $.ajax({
            type: "POST",
            url: "http://studiorb.me:8080/emailto",
            data: JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            }),
            headers: {"Content-Type": "application/json"},
            success: function (data) {
                alert("문의가 성공적으로 접수되었습니다.");
            },
            error: function (error) {
                alert(' 관리자에게 문의해 주세요')
            }

        });

    });
//mail end.
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}