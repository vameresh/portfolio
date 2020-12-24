var tiles = {
    udeca: `<h3>Stryker Universal Device Configuration App</h3>
    <p>
        Smart Equipment Management or SEM&#174; already had developed a wireless ecosystem of medical and surgical Stryker devices to provide a more controlled customer experience. 
        However, configuring these devices required manually plugging into them to connect them with the hospital network. 
        There was a customer benefit to provide a faster, wireless method of configuration.
        <br>
        <br>
        The task was to develop customer-facing agnostic mobile application that can interact with and configure Stryker Wi-Fi devices to connect to their surrouding hospital environment.
        <br>
        <br>
        Working with a global team of 5 members located from San Francisco to India, I developed the beta prototype of the config app. 
        Using the Ionic Mobile Dev Framework and Angular JS, the project was based on three main features: connectivity, dynamic UI generation, and secure file transfer. 
        <br>
        <br>
        The beta development of the app could connect to devices either with Wi-Fi or Bluetooth for legacy models.
        Once connected, the app would dynamically generate a UI built from a JSON packet recieved from the device.
        After user input, the app submits a completed JSON packet back to the device to finish configuration.
        All communication between the phone and device was done securely through HTTPS.
        <br>
        <br>
        My team automated CI/CD through Microsoft Azure to ensure clean builds and concurrent testing,
        and used Agile project management to stay updated on all progress and knowledge transfers.
    </p>`,
    os: `<h3>Thread Library Implementation</h3>
    <p> Working in a remote team of three, developed a working implementation of C++ thread library as a learning project. Implemented mutexes, conditional variables, and threads. Gained understanding of OS concurrency. </p>
    <br>
    <h3>OS Pager</h3>
    <p> Working in a remote team of two, developed a working paging system to serve mapped virtual addresses for processes as a learning project. Implemented second-chance FIFO eviction of pages in virtual memory. Designed a system of r/w faults to improve efficiency as well as maintain correctness. Gained understanding of OS address spaces and processes. </p>
    <br>
    <h3>Networked File Server</h3>
    <p> Working in a remote team of three, developed a encrypted networked filesystem as a learning project. Implemented creating, deleting, reading, and writing files and directorys in a remote server. Gained understanding of OS filesystems.</p>`,
    friendify: `<h3>Friendify. A Spotify Project.</h3>
    <p> Developed as a personal project to further understand backend systems as well as experiment with the Spotify API. 
        Users can sign in through their spotify accounts and can compare music similarities with their friends.
        <br>
        Spotify API disallowed storage of user information, unless users are signed in and active. 
        Workaround was to develop liveness storage so users can compare only when both are active on the app.
        <br>
        <br>
        Built using Python Flask, Jinja templating, <i>Spotipy</i> Python Library, and SQL for persistent storage. 
        <br>
        <br>
        <b>Github: </b> <a href = "https://github.com/vameresh/friendify">https://github.com/vameresh/friendify</a>
    </p>`,
    pasta: `<h3>PastaTime: Automated Pomodoro</h3>
    <p> Working in a team of four, developed a frontend site as a learning project in UI/UX development and human-centered design.
        We automated the Pomodoro productivity technique of work and break intervals. 
        <br>
        The site presents arcade-style visuals as well as a custom TomatoTimer that reduces color fill as time counts down.
        It also includes custom breaks including traditional games as well as video streaming options such as Youtube, Netflix, etc.
        <br>
        <br>
        Built using Vue JS framework and Bootstrap CSS.
        <br>
        <br>
        <b>Github: </b> <a href = "https://github.com/vameresh/493pastatime">https://github.com/vameresh/493pastatime</a>
    </p>`
}

$(document).ready(function (){
    let toggle_on = false;
    let splash_on = true;
    let current = "";
    let current_label = "";
    let cloud = $("#clouds");
    let mtns = $("#mtns");
    let offset = cloud.offset();
    let width = cloud.width();

    let centerX = offset.left +  width / 2;

    $(document).mousemove(function( event ) {
        let marginLeft = (centerX - event.clientX) * .05;
        let marginRight = (centerX - event.clientX) * -.05;
        cloud.css("margin-left", marginLeft);
        mtns.css("margin-left", marginRight);
    });

    $(document).mousedown(function(e) {
        if(!$(".icon").is(e.target) && $(".icon").has(e.target).length === 0){

            if(splash_on){
                $("#name").css("margin-top", "0%");
                $("body").css("cursor", "initial");
                $("#nav-bar").fadeIn("slow");
                splash_on = false;
            }
            else if(toggle_on){
                if((!$("#tile").is(e.target) && $("#tile").has(e.target).length === 0) &&
                (!$(".click").is(e.target) && $(".click").has(e.target).length === 0)){
                    $("#tile").slideToggle("fast");
                    $(current_label).toggleClass("underline");
                    current ="";
                    current_label = "";
                    toggle_on = false;
                }
            }
            else if(!toggle_on && !splash_on){
                if(!$(".click").is(e.target) && $(".click").has(e.target).length === 0){
                    $("#name").css("margin-top", "15%");
                    $("body").css("cursor", "pointer");
                    $("#nav-bar").fadeOut("slow");
                    splash_on = true;
                }
            }
        }
    })

      $(".click").click(function(){
        let label = "#" + $(this).attr('id');
        let id = label + "-tile";
        let tile = $(this).attr('id');
        
        if(toggle_on){
            if(id != current){
                $(current_label).toggleClass("underline");
                $(label).toggleClass("underline");
                $("#tile").html(tiles[tile]);
                current = id;
                current_label = label;
                toggle_on = true;
            }
            else{
                //closing
                $("#tile").slideToggle("fast");
                $(current_label).toggleClass("underline");
                current ="";
                current_label = "";
                toggle_on = false;
            }
            
        }
        else{
            current = id;
            current_label = label;
            toggle_on = true;
            $("#tile").html(tiles[tile]);
            $("#tile").slideToggle("slow");
            $(label).toggleClass("underline");
        }
        
      });

    

});

