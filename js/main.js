const listaSpesa = [
    "Latte",
    "Pane",
    "Uova",
    "Frutta",
    "Verdura",
    "Carne",
    "Pesce",
    "Pasta",
    "Riso",
    "Formaggio"
  ];
  
  const listaElementi = document.getElementById("lista-spesa");
  
  let i = 0;

  while(i < listaSpesa.length){
    
    const nuovoElemento = document.createElement("li");
    
    nuovoElemento.innerHTML = listaSpesa[i];
    
    listaElementi.appendChild(nuovoElemento);
    
    i++;
  }

  