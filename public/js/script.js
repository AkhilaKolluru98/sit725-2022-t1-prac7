

//SideNav
 const sideNav= document.querySelector('.sidenav');
 M.Sidenav.init(sideNav, {});

 //Slider
 const slider=document.querySelector('.slider');
 M.Slider.init(slider, {
     indicators:false,
     height:500,
     transition: 500,
     interval: 6000
 });

 //Autocomplete
 const ac=document.querySelector('.autocomplete');
 M.Autocomplete.init(ac, {
     data :{
         "Aruba":null,
         "Sydney": null,
         "Cancun": null,
     }
 })

 //Material boxed
 const mb=document.querySelectorAll('.materialboxed');
 M.Materialbox.init(mb,{});

 //Scrollspy
 const ss=document.querySelectorAll('.scrollspy');
 M.ScrollSpy.init(ss, {});


 
 //When Submit button is clicked this method will be invoked
 /*const submitForm = () => {
     let formData = {};
     formData.name =$('#name').val();
     formData.email =$('#email').val();
     formData.phone =$('#phone').val();
     formData.message =$('#message').val();

     console.log("Form Data Submitted: ", formData);
     
 }*/


 
 const cardList = [
     {
        image:"images/resort2.jpg",
        title: "The Bahamus" ,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum excepturi ipsum velit vitae dolorum eum!"
     },
     {
        image:"images/resort3.jpg",
        title: "Nova Scotia",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum excepturi ipsum velit vitae dolorum eum!"

     }
 ]

 //To add cards using js
 const addCards = (items) => {
     items.forEach(item => {
         let itemToAppend = 
         '<div class="col s12 m4">'+
              '<div class="card">'+
                '<div class="card-image">'+
                  '<img src="'+item.image+'" alt="">'+
                  '<span class="card-title">'+item.title+'</span>'+
                '</div>'+
                '<div class="card-content">'+item.description+'</div>'+
              '</div>'+
            '</div>';
            $("#card-section").append(itemToAppend)
     });
 }

$(document).ready(function(){
    /*$('#formSubmit').click(()=>{
        submitForm();
    })*/
    
    addCards(cardList);
    
    
});