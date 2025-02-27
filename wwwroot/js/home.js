document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('development-mode')){
        // if production mode

    }
    
    // get reviews
    const reviewsContent = document.querySelector('.reviews-content');
    
    apiRequest('/api/review/approved', 'GET', null, (response) => {
        if(response) {
            reviewsContent.textContent = JSON.stringify(response);
        }
    }, (error, response) => {
        console.log('Something goes wrong with getting reviews', error, response);
    })
    
    // code here

    var quill = new Quill('#editor', {
        theme: 'snow'
    });
});