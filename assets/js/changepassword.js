//var newpassword = document.getElementById('newpassword').value
//var confrimpassword = document.getElementById('confirmpassword').value
//var btnsavepassword = document.getElementById('save').value

function savePassword(){
    var newpassword = document.getElementById('newpassword').value
    var confirmpassword = document.getElementById('confirmpassword').value

    if((newpassword == confirmpassword) && (newpassword || confirmpassword == null)){
        alert("Password Berhasil Diubah")
    }
    else{
        alert("Password Tidak Berhasil Diubah")
    }
}

//btnsavepassword.onclick('click', function(){

//    if(newpassword == confirmpassword){
//        alert('Password Berhasil Diubah')
//        window.location.replace('home.html')
//    }
//    else {
//        alert('Password Tidak Berhasil Diubah')
//    }

//})