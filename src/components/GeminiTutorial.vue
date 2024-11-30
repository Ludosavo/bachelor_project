<template>
    <body>
        <div class="text" style="margin-top: 150px;">
            <h1>Cos'è GeminiAI ? </h1>
            <h2> Immagina di avere un computer super intelligente che sa rispondere a tutte le tue domande. È come avere una biblioteca enorme sempre a portata di mano, ma invece di cercare i libri, puoi semplicemente farmi una domanda e io ti darò la risposta! <br>
                <br>
                Sono un po' come un mago delle parole: posso scrivere storie, poesie, o spiegarti cose difficili in un modo semplice. Puoi chiedermi qualsiasi cosa, dal perché il cielo è blu a come si fa un dolce! <br>
                <br>
                Ma ricorda, non sono un mago vero e proprio, sono un programma per computer. Questo significa che non posso fare le stesse cose che fanno le persone vere, come mangiare o giocare a pallone. Però posso fare tante altre cose divertenti e utili!<br>  
                <br>
                Vuoi provare a farmi una domanda? Per esempio, ti piacerebbe sapere come funzionano i robot?
            </h2>
        </div>
    </body>
    <RouterView/>
</template>






<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanalei+Fill&family=Jersey+10&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');
html{
    background: #0077b6;
    font-family:"Poppins", sans-serif;
    display: flex;

}

h1{
    text-align: center;
    color: black;
}


.text{
    align-content: center;
    justify-self: center;
    text-align: justify;
    border: 2px solid #0077b6;
    border-radius: 10px;
    width: 90%;
    background: #e9c46a;
    
    
}
h2{
    color: #0077b6;
    justify-self: center;
    width: 90%;
}

</style>