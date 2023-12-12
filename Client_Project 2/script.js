var nameError=document.getElementById('name-error');
var mobileError=document.getElementById('mobile-error');
var emailError=document.getElementById('email-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name= document.getElementById('firstName', 'lastName').value;
    nameError.innerHTML ='<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateMobile(){
    var mobile= document.getElementById('mobile').value;

    if(mobile.length !== 10){
        mobileError.innerHTML ="Phone should be 10 digits";
        return false;
    }

    if(!mobile.match(/^[0-9]{10}$/)){
        mobileError.innerHTML ="Only digits";
        return false;
    }

    mobileError.innerHTML ='&#x2713';
    return true;
}

function validateEmail(){
    var email= document.getElementById('email').value;


    emailError.innerHTML='&#x2713';
    return true;
}

function validateForm(){
    if(!validateName() || !validateMobile() || !validateEmail()){
        submitError.style.display='block';
        submitError.innerHTML="Please fix error submit"
        setTimeout(function(){submitError.style.display='none';}, 3000);
        return false;
    }

    submitError.innerHTML ="Form Submitted";
    return true;
}


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
        slideshows.forEach(initSlideShow);



        function initSlideShow(slideshow) {

            var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

            var index = 0, time = 5000;
            slides[index].classList.add('active');

            setInterval( () => {
                slides[index].classList.remove('active');
                
                index++;
                if (index === slides.length) index = 0;

                slides[index].classList.add('active');

            }, time);

            
        }

        

