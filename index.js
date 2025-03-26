let body=document.querySelector("body")

let ul1=document.createElement("ul")
//exercice1

//1

let ul122=document.querySelector("ul_liste")

let lis=document.querySelectorAll(".li")
for(let i=0;i<lis.length;i++){
    lis[i].innerText= i;
}

  


//2
for(let i=1 ;i<=10;i++){
    let p=document.createElement("p")
    body.appendChild(p)
    p.innerText="Paragraphe" + i
}






//4
let ul2=document.createElement("ul")

body.appendChild(ul2)
 for(let i=1;i<=5;i++){
    let l2=document.createElement("li")
     ul2.appendChild(l2)

     l2.innerText = "item" + i
     if(i%2 ==0){
         ul2.removeChild(l2)
     }
    
    }

    //5
    let tab=["Pomme","Banane","orange"]
    for(let i=0 ;i<tab.length ;i++){
       let l3=document.createElement("li")
   
       ul2.appendChild(l3)
       l3.innerText = tab[i]

   
    }

    
    //exercice2



//1
    for(let i=0; i<=4;i++){
        let div=document.createElement("div")
        body.appendChild(div)
        let p1=document.createElement("p")
    div.appendChild(p1)
    p1.innerText="Enfant ajoute"

     }

//2 supprimer les li

 let ul11=document.getElementById("ul1")

  
while(ul11.firstElementChild){
     ul11.removeChild(ul11.firstElementChild)
 }

 //toatalement
 //ul11.innerHTML="";


///3parent de span

const span=document.getElementById("span")
   const parent=span.parentNode;
  console.log(parent)  
  
  
  //autre methode


  let tableparent=[span.parentElement]


  for(let i=0;i<1;i++){
    tableparent.push(tableparent[i].parentElement)

  }


console.log(tableparent)

     ///4remplacement
let div=document.getElementById("madiv")

let section=document.createElement("section")

section.innerHML=div.innerHTML

div.parentNode.replaceChild(section,div);


//5
  
     let div2=document.createElement("div")
     body.appendChild(div2)

     let ul3=document.createElement("ul")
     div2.appendChild(ul3)
     for(let i=0; i<=2;i++){
     let li=document.createElement("li")
     ul3.appendChild(li)
     
     }




     
     //exercice3

//1
 let maliste=document.getElementById("liste")
 let ul=document.getElementById("ul")

 let cible=maliste.nextElementSibling;
 let cible2=maliste.previousElementSibling;
// cible.style.color='red'
// cible2.style.color='red'

console.log(cible2,cible)

 while(cible){
    cible.style.color='red'
     

    cible=cible.nextElementSibling;
    
 }
 while(cible2){
 cible2.style.color='red'
 cible2=cible2.previousElementSibling;
 }
 //2
let cible1=ul.firstElementChild;
let cible11=ul.lastElementChild;
console.log(cible1,cible11)

//3 echanger deux li

let liste1=document.getElementById("liste2")


let temp1=liste1.cloneNode(true)
let temp2=maliste.cloneNode(true)

ul.replaceChild(temp2,liste1)
ul.replaceChild(temp1,maliste)

//4 supprimer un frere

let p1=document.getElementById("p1")
let divp=document.getElementById("parentdiv")
 let p2=p1.nextElementSibling;

 divp.removeChild(p2)

//5 copier un element 

let temp3=p1.cloneNode(true)

divp.appendChild(temp3)



//exercice4
//1
     let T=[['nom',"age"],["alice",25],["bob",30]]
     console.log(T)

     
     let table1=document.createElement("table")
      body.appendChild(table1)
      table1.style

     let tbody=document.createElement("tbody")
     table1.appendChild(tbody)
     for(let i=0;i<T.length;i++){
        let tr=document.createElement("tr")
        tbody.appendChild(tr)
          let td1=document.createElement("td1")
          tr.appendChild(td1)
    
            td1.innerText=T[i]
    }
    console.log(tbody)

//2
T.push(['diane',14])


//3
    let T1=["A","B","C"]
   
    for(let i=0 ;i<T1.length ;i++){
        let l5=document.createElement("li")
    
        ul2.appendChild(l5)
        l5.innerText = T1[i]
        if(T1[i]==="B"){
             l5.style.fontWeight = "800"
                }
     }
  
    

     console.log(T1)    
    //4
     let T2 = ["Rouge","Vert"] 
     let T3=['Bleu','Jaune']
     
     for(var i=0;i<T3.length;i++){
        T2.push(T3[i]) 
      }
     console.log(T2)
    
  
     //5
     let ul4=document.createElement("ul")
     body.appendChild(ul4)
     let t=[{nom:'Alice', age:25},{nom:'Bob', age:30}]
     for(let i=0;i<2;i++){

     let n3=document.createElement("li")
     ul4.appendChild(n3);
    n3.innerText = t[i].nom + "("+ t[i].age  + ")"
    
     }

     //exercice1 question3
  const couleur=["green","red","yellow" ,"white","purple","pink","blue","gray","aqua"]
  let tableau=document.getElementById("tableau")
  let cellule=document.getElementsByTagName("td")
  for(let i=1 ;i<= cellule.length;i++){
      cellule[i].style.background=couleur[Math.floor(Math.random() * couleur.length)];
  
  }


   


 


 

    


    
    
  


   

     

    
      



