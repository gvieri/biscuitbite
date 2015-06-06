/*
 * Author Giovambattista Vieri
 * (c) 2015 All rights reserved
 *
 * code 
 * bootstrap, jquery, bootbox required
 *
 */


function putCookie() { 
        var today = new Date();
        var expire = new Date();
        if (nDays==null || nDays==0) nDays=1;
        expire.setTime(today.getTime() + 3600000*24*nDays);
        document.cookie = 'AUTORIZZATO=OK;expires='+expire.toGMTString()+';path=/';
}


var authForm= { 
        message: propMsg ,

        title: "Informativa breve su cookie / About the cookie",
        buttons: {
                success: {
                        label: "Accetto le condizioni/<br>I accept",
                        className: "btn-success myAuthButton",
                        callback: function() {
                                putCookie();
                                location.reload(true);
                        }
                },
                danger: {
                        label: "Informativa lunga/<br>more informations",
                        className: "btn-warning myAuthButton",
                        callback: function() {
                                 window.open(longinfo,'_self'); 

                        }
                },
                main: {
                        label: "Esci/<br>Exit",
                        className: "btn-danger myAuthButton",
                        callback: function() {
                                //window.open("http://www.garanteprivacy.it",'_self');    
                        }
                }
        } 
} // authForm


