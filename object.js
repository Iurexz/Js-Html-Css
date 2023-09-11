   //DOM

   const lampada = document.querySelector('#lampada')
   const bt1 = document.querySelector('#btLigar')
   const bt2 = document.querySelector('#btDesligar')
   const lampadabroken = document.querySelector(#lampada)

   //EVENTO

   bt1.addEventListener('click',ligar)
   bt2.addEventListener('click',desligar)

   //FUNÇÕES

   function ligar(){
    lampada.src="imagens/acesa.gif"
   }
   function desligar(){
    lampada.src="imagens/apagada.gif"
   }
