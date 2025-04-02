$(document).ready(function () {
    
    $('.text').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "bounceIn"
        },
        out:{
            effect: "bounceOut"
        }
    })

    //siriwave
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1.2",
        speed: "0.15",
        sutostart:true
    });

    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in:{
            effect: "fadeInUp",
            sync: true
        },
        out:{
            effect: "fadeOutUp",
            sync: true
        }
    })

    //mic button click event

    $("#micButton").click(function () { 
        $("#Oval").attr("hidden",true);
        $("#SiriWave").attr("hidden",false);
        
    });
});