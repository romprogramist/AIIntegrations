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

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-item__trigger');
        
        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    const phoneInput = document.querySelector('#phone');

    // Phone number mask
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = value.substring(1);
                }
                const matches = value.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                e.target.value = !matches[2] ? `+7 (${matches[1]}`
                    : !matches[3] ? `+7 (${matches[1]}) ${matches[2]}`
                    : !matches[4] ? `+7 (${matches[1]}) ${matches[2]}-${matches[3]}`
                    : `+7 (${matches[1]}) ${matches[2]}-${matches[3]}-${matches[4]}`;
            }
        });
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Отправка...';
            submitButton.disabled = true;

            try {
                const formData = new FormData(contactForm);
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
            } finally {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
});