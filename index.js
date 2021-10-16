


let myLead=[];
const inputEl=document.getElementById("input-el"); 
const inputbtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn");
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLead"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
  myLead=leadsFromLocalStorage;
  render(myLead);

}


function render(leads){
  let listItem="";
  for(let i=0; i<leads.length; i++){
    
    
  listItem +=` 
  <li>
      <a target='_blank' href='${leads[i]} ' > ${leads[i]} </a>
  </li>
  `; 
    
  }
  ulEl.innerHTML=listItem;
}



tabBtn.addEventListener("click", function(){

  chrome.tabs.query({ active:true , currentWindow:true },function(tabs){
    myLead.push(tabs[0].url);

    localStorage.setItem("myLead", JSON.stringify(myLead));
  
    render(myLead);
 
  });
  });
  

  


deleteBtn.addEventListener("dblclick", function(){

  localStorage.clear();
  myLead=[];
  render(myLead);

});


inputbtn.addEventListener("click", function(){
myLead.push(inputEl.value);//to get the value from desir box
  inputEl.value="";
 
  localStorage.setItem("myLead", JSON.stringify(myLead));

  render(myLead);
 
});



