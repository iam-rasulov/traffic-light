// const elModal = document.querySelector(".modal");

// const elBtn = document.querySelector(".btn");

// elModal.addEventListener("click", evt => {

//     const isElRemover = evt.target.matches(".modal") || evt.target.matches(".modal__show__btn");

//     if(isElRemover){
//         evt.currentTarget.classList.remove("d-block")
//     }
// })

// const showModal = setTimeout(() => {
//     elModal.classList.add("d-block")
// },2000);

// elBtn.addEventListener("click", () => {
//     clearTimeout(showModal)
// });

const svetafor = document.querySelector(".svtafor");

const qizl = document.querySelector(".qizl");

const saru = document.querySelector(".saru");

const yawl = document.querySelector(".yawl");


function setTime () {
    setTimeout(()=> {
        qizl.style.backgroundColor = "red";
       },10)
   
       setTimeout(()=> {
           qizl.style.backgroundColor = "black";
          },10000)
       
       setTimeout(()=> {
         saru.style.backgroundColor = "yellow";
        },10000)
       
        setTimeout(()=> {
         saru.style.backgroundColor = "black";
        },12500)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "yellow";
        },13000)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "black";
        },13500)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "yellow";
        },14000)
   
        setTimeout(()=> {
           saru.style.backgroundColor = "black";
        },14500)
       
        setTimeout(()=> {
         yawl.style.backgroundColor = "green";
        },15000)
   
        setTimeout(()=> {
           yawl.style.backgroundColor = "black";
          },25000)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "yellow";
        },25000)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "black";
        },27000)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "yellow";
        },27500)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "black";
        },28000)
       
        setTimeout(()=> {
           saru.style.backgroundColor = "yellow";
        },28500)
   
        setTimeout(()=> {
           saru.style.backgroundColor = "black";
        },29000)
}

setTime()

const stop = setInterval(()=>{

    setTimeout(()=> {
     qizl.style.backgroundColor = "red";
    },10)

    setTimeout(()=> {
        qizl.style.backgroundColor = "black";
       },10000)
    
    setTimeout(()=> {
      saru.style.backgroundColor = "yellow";
     },10000)
    
     setTimeout(()=> {
      saru.style.backgroundColor = "black";
     },12500)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "yellow";
     },13000)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "black";
     },13500)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "yellow";
     },14000)

     setTimeout(()=> {
        saru.style.backgroundColor = "black";
     },14500)
    
     setTimeout(()=> {
      yawl.style.backgroundColor = "green";
     },15000)

     setTimeout(()=> {
        yawl.style.backgroundColor = "black";
       },25000)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "yellow";
     },25000)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "black";
     },27000)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "yellow";
     },27500)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "black";
     },28000)
    
     setTimeout(()=> {
        saru.style.backgroundColor = "yellow";
     },28500)

     setTimeout(()=> {
        saru.style.backgroundColor = "black";
     },29000)
    
    },29000)