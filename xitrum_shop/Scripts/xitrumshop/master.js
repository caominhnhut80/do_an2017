﻿$(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $('#quantri').click(function (e) {
        //var check = $('#check').val();
        var check = sessionStorage["logged"];
        if (check !=1) {
            $('#loginModal').modal('show');
            $('#modal_password').focus();
        }
        else {
            $('#divquantri').collapse('toggle');
        }

    });

});
function submitLogin() {
    var username = $('#modal_username').val();
    var password = $('#modal_password').val();
    if ((username != '') && (password != '')) {

        $.ajax({
            type: 'post',
            url: 'AdminWebService.asmx/allowView',
            contentType: 'application/json;charset=utf-8',
            data: "{username:'" + username + "',password:'" + password + "'}",
            dataType: "JSON",
            success: function (data) {
                if (data.d) {
                    $('#loginModal').modal('hide');
                    $('#divquantri').collapse('toggle');
                    sessionStorage["logged"] = 1;
                    
                }
                else {
                    hienthongbao_modal('Sai tài khoản hoặc mật khẩu');
                    $('#modal_password').focus();
                }
            }
        })
    }
    else {
        hienthongbao_modal('Tài khoản hoặc mật khẩu không được để trống');
        $('#modal_password').focus();
    }
};

