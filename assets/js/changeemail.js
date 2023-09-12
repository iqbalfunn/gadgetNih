function saveEmail(){
    var newemail = document.getElementById('newemail').value
    var oldemail = document.getElementById('oldemail').value

    if((oldemail == "") && (newemail == "")){
        alert("Email Tidak Berhasil Diubah")
    }
    else{
        alert("Email Berhasil Diubah")
    }
}