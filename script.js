var tiles = {
    udeca: `<h3>Stryker Universal Device Configuration App</h3>
    <p>
        Developed a cross-platform mobile app to configure 100's of medical devices into a singular wireless ecosystem, working with a global team of 5.
    </p>
    <p>
        Personally headed up development of prototype and pitched design and functionality to management team and demo'ed final build to intern cohort of 40 students.
    </p>
    <p>
        Led knowledge transfer meetings to international dev team in India over the last 2 weeks of my internship to ensure a smooth transition of production.
    </p>
    <p>
        Project built using Ionic Mobile Framework and Angular JS. 
    </p>
    <br>
    <p>
        <b> Skills gained: </b>
        <ul>
            <li>IoT devices</li>
            <li>WiFi and Bluetooth Connection</li>
            <li>Networking Systems</li>
            <li>Agnostic Mobile Development</li>
            <li>Accessible Design</li>
            <li>CI/CD in Microsoft Azure</li>
            <li>Agile Methodology</li>
        </ul>
    </p>
        `,
    os: `<h3>Thread Library Implementation</h3>
    <p>
    Developed a working implementation of a C++ thread library as a learning project, managing mutexes, conditional variables, and threads. 
    Worked in a global team of 3 members. Gained understanding of OS concurrency. </p>
    </p>
    <h3>OS Pager</h3>
    <p> 
        Developed a working paging system to map virtual addresses for pages in processes.
        Implemented second-chance FIFO eviction of pages in virtual memory. 
        Designed a system of r/w faults to improve efficiency as well as maintain correctness. 
    </p>
    <h3>Networked File Server</h3>
    <p> 
        Developed a encrypted networked filesystem that can manage 100's of users in seperate threads. 
        Implemented creating, deleting, reading, and writing files and directorys in a remote server. 
        Gained understanding of OS filesystems.
    </p>
    <br> 
    <p>
        <b> Skills gained: </b>
        <ul>
            <li>OS Concurrency and Atomicity</li>
            <li>OS Address Spaces</li>
            <li>OS Filesystems</li>
            <li>Processes</li>
            <li>Multi-threaded programming</li>
            <li>Networking Systems</li>
            <li>Computer Security</li>
        </ul>
    </p>`,
    friendify: `<h3>Friendify. A Spotify Project.</h3>
    <p> 
        Developed a full-stack server-side dynamic app for comparing Spotify music tastes with friends, using persistent storage to manage and maintain liveness of each user.
    </p>
    <p>
        Initially made as a personal project to further understand backend systems as well as experiment with the Spotify API. 
    </p>
    <p>
        Users can sign in through their spotify accounts and see their top artists and tracks as well as friend, unfriend, and compare with other users.
    </p>
    <p>
        Project built using Python Flask, Jinja templating, <i>Spotipy</i> Python Library, and SQL for persistent storage. 
    </p>
    <br>
    <p>  
        <b> Skills gained: </b>
        <ul>
            <li>Full-Stack Development</li>
            <li>Web Systems</li>
            <li>Public APIs</li>
            <li>Persistent Storage</li>
        </ul>
    </p>
    <br>
    <p>
        <b>Github: </b> <a href = "https://github.com/vameresh/friendify">https://github.com/vameresh/friendify</a>
    </p>`,
    pasta: `<h3>PastaTime: Automated Pomodoro</h3>
    <p> 
        Developed a frontend site to automate the Pomodoro technique to improve productivity during work sprints, working with a remote team of four.
    </p>
    <p>
        Designed arcade-style visuals as well as a custom TomatoTimer that reduces color fill as time counts down.
        Included custom breaks including traditional games as well as video streaming options such as Youtube, Netflix, etc.
    </p>
    <p>
        Project built using Vue JS framework and Bootstrap CSS.
    </p>
    <br>
    <p>
        <b> Skills gained: </b>
        <ul>
            <li>Human-Centered Design</li>
            <li>UI/UX Design</li>
            <li>Front-end Development</li>
        </ul>
    </p>
    <br>
    <p>
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

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // on mobile 

        window.ondevicemotion = function(event) {
            let marginLeft = event.accelerationIncludingGravity.x * 5;
            let marginRight = event.accelerationIncludingGravity.x * -5;
            cloud.css("margin-left", marginLeft);
            mtns.css("margin-left", marginRight);

            
        }
    }
    else{
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
                        $("#tile").slideToggle("slow");
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
    }

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
                $("#tile").slideToggle("slow");
                $(current_label).toggleClass("underline");
                current ="";
                current_label = "";
                toggle_on = false;
            }
            
        }
        else{
            $("#tile").html(tiles[tile]);
            $("#tile").slideToggle("slow");
            $(label).toggleClass("underline");
            current = id;
            current_label = label;
            toggle_on = true;
        }
        
    });


});

