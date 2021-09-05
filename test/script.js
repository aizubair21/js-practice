$(function() {
    $(".owlCarosel1").owlCarousel({
         animateOut: 'zoomOutDown',
        animateIn: 'zoomInDown',
       
        center:false,
        items:1,
        loop:true,
        margin:10,
        nav:true,
        merge: true,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause: false,
   

    });
    // $(".start").on("click", function () {
    //     $(this).trigger('play.owl.autoplay', [1000]);
    // });
    // $(".stop").on("click", function (e) {
    //     owl.trigger('stop.owl.autoplay');
    // });

  
    let student_information_list = [];
    student_information_list = JSON.parse(localStorage.getItem('student_list'));

    document.querySelector('#save_info').addEventListener("click", function (e) {
        e.preventDefault();
        let name = data_form.name.value;
        let roll = data_form.roll.value;
        let subject = data_form.dipt.value;

        console.log(name, roll, subject);

        let student_info = {
            name: name,
            roll: roll,
            subject: subject,
        }

        student_information_list.push(student_info);
    
        localStorage.setItem("student_list", JSON.stringify(student_information_list));


        render_student_information_list();
    })



    function render_student_information_list () {
        let tbody = document.querySelector('#showInfo');


       student_information_list = JSON.parse(localStorage.getItem('student_list'));

       student_information_list.forEach(element => {
           console.log(element);
           let data = '';
           data += `<tr>
                        <td>${element.name} </td>
                        <td>${element.roll} </td>
                        <td>${element.subject} </td> 
                    </tr>`;
           tbody.innerHTML = data;
       });


       
    }

});