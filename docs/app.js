var typed=new Typed(".text",{
    strings:["Frontend Developer","Photographer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
});

document.addEventListener('DOMContentLoaded',function(){
    let head=document.getElementsByClassName('head')[0];

    window.addEventListener('scroll',function(){
        if(window.scrollY>0){
            head.classList.add("fixed");
        }else{
            head.classList.remove("fixed");
        }
    })
})

document.addEventListener('DOMContentLoaded',function(){
   mpb('htmlProgressBar',70);
   mpb('cssProgressBar',50);
   mpb('jsProgressBar',50);
   
   mpb('cProgressBar',80);
});

function mpb(bid,tprog){
    let prog=0;

    let barid=document.getElementById(bid);

    let interval=setInterval(()=>{
       if(prog>=tprog){
        clearInterval(interval);
       }else{
        prog+=1;
        barid.style.width=prog+"%";
       }
    },10);
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('nav a').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
               e.preventDefault();

               let id=this.getAttribute('href').substring(1);

               document.getElementById(id).scrollIntoView({
                behavior:'smooth'
               });
        });
    });
});
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('header a').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
               e.preventDefault();

               let id=this.getAttribute('href').substring(1);

               document.getElementById(id).scrollIntoView({
                behavior:'smooth'
               });
        });
    });
});

document.getElementById('bt').addEventListener('click', function() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    var pdfPath = 'https://drive.google.com/file/d/1gVkKnGylV9dSuzRzNQN8j6S35oBS_acD/view?usp=sharing';

    // Create a link element
    var link = document.createElement('a');
    link.href = pdfPath;

    // Set the download attribute with the desired filename
    link.download = 'Resume.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
});
