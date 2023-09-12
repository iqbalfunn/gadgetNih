$.ajax({ 
    type: "GET",
    url : 'https://server-e-commerce-cms.herokuapp.com/products',
    headers: {"access_token": localStorage.getItem('access_token')},
    success: function (result) {
        for(var i = 0; i < result.length; i++) {
            // hanya menampilkan data yang memiliki stock lebih dari 100
            if(result[i].stock >= 100){
                $('#popular').append(`
                <div class="phone__list__item">
                <div class="phone__list__item__poster">
                    <img src="${result[i].image_url}" alt="phone-Poster">
                </div>
                <div class="phone__list__item__info">
                    <a href="#">${result[i].name}</a>	
                </div>
                </div>
            `);
            }
        }
    },
    error: function (error) {
        // menampilkan pesan error
        alert(`Error!, ${error.responseJSON.message}`)
    }
});
