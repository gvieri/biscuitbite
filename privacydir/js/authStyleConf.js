/*
 * Author Giovambattista Vieri 
 * (c) 2015 all rights reserved
 *
 *
 * configuration file
 */

var domain 	= "http://www.myexample.com/";
var longinfo 	= "http://www.myexample.com/privacydir/longinfo.html";
var nDays       = 30; 

var messaggio   = "Questo sito utilizza per le sue funzionalit&agrave;: " +
"<br>Cookie tecnici" +
//"<br>Cookie di terze parti" +
//"<br>Per procedere oltre: puoi accettare le condizioni di utilizzo (pulsante verde), leggere l'informativa lunga (pulsante giallo), andare su un altro sito (pulsante grigio) "  ; 
"<br>Per procedere scegli uno dei pulsanti sottostanti: "  ; 

var message     = "This site use technical cookies  for its technical functionality: " +
"<br>Technical cookies  "+
//"<br> Third party cookies"+
//"<br>This site uses third party cookies to share its own contents on social networks " +
//"<br>To go further: you can accept the terms of use (the green button), read the long information notes (yellow button), go to another site (gray button) ";    
"<br>To go further, choose an action: ";    

var propMsg="<div id='msgIT'>" + messaggio + "</div><BR>" +
"<div id='msgEN' >" + message + "</div>" +
" ";



