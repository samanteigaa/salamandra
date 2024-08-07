}
  
if (keyIsDown(DOWN_ARROW)){
  yRaquete += 10;
}
}

function verificaColisaoRaquete(){
if (xBolinha - raio < xRaquete + raqueteComprimento
   && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
  velocidadexBolinha *= -1;
}
}

function calisaoRaquete(x,y){
  colidiu =
  collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
   velocidadexBolinha *= -1; 
  }
}


function movimentaRaqueteOponente (){
velocidarYOponente = Ybolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
yRaqueteOponente += velocidadeYOponente  
} 