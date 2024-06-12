(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{41:function(e){e.exports=JSON.parse('[{"project_name":"Viewmaster for Friction Visualization","image_folder_path":"capstone/","image_files":["capstone_render-min.JPG"],"inProgress":false,"dates":"September 2023 to May 2024","info":{"tags":["Vibration","Digital Image Correlation","SolidWorks","microcontroller","research","coursework"],"description":{"brief":"BU Senior Capstone Project: Mechanism for Visualizing Stick-Slip Friction","verbose":["Detailed Description Coming Soon"]}},"links":[{"source":"CAD Models, Videos, and Additional Material","url":"/"}]},{"project_name":"Rotary Vane Pump","image_folder_path":"vane_pump/","image_files":["PU-00_Pump_Assembly_dwg_1-min.jpg","PU-00_Pump_Assembly_dwg_2-min.jpg","PU-01C Housing Cast-min.png","PU-01 Housing Machined-min.png","PU-01 Housing Machined Front-min.png","PU-01 Housing Machined Rear-min.png","PU-01 Housing Machined Surfaces-min.png"],"inProgress":false,"dates":"September 2023 to December 2023","info":{"tags":["Onshape","GD&T","DFM","simulation","Ansys","aPriori","coursework"],"description":{"brief":"Rotary vane pump design and production-quality drawing creation with an emphasis on design for manufacturing.","verbose":[{"title":"Project Overview","text":"Applied DFM rules to the design of a rotary vane pump optimized for the use with DrPepper syrup. I worked on a team of three: Axel Toro Vega, Shrishti Chaudhary, and myself. In addition to working on the design, CAD, and drawings, I also served as the project manager for the team, evaluating what needed to be done, delegating tasks, and scheduling meetings."},{"title":"Course Overview","text":"The course, \\"Manufacturing Processes for Design and Production\\" introduced us to a multitude of manufacturing processes from aluminum sand casting, CNC milling, to injection molding, to sheet metal bending. In this class we gained a hands-on understanding of how these processes are applied in production by machining and assembling our own rotary vane pumps in the university machine shop and foundry, thus extending our ability to design for manufacturing. With my newfound knowledge, I swear, on my B.S. in mechanical engineering, to avoid the use of helicoils in my future designs, no matter how convenient they seem in CAD."},{"title":"Project Goals","text":"Redesign and optimize the pump for a given fluid, with given input and output pressures, to meet a certain working time, and function within a set of given environmental conditions. The course placed emphasis on the application of DFM principles, material selection, cost analysis with aPriori, tolerance stacking, and the delivery of a complete set of production-quality drawings with GD&T."},{"title":"Design","text":"We narrowed down the range of materials, taking into consideration factors such as food safety, cost, corrosion resistance, and variability with temperature. The pump we constructed in class utilized two bulkheads, sealed with gaskets, and fixed using a bolt pattern. Due to the nature of gaskets, this introduced two sources of variability in the clearance for the pump rotor. We replaced the gaskets with an o-ring seal and eliminated one of the bulkheads. We replaced the bolt circle with a bayonet-lock style attachment mechanism for ease of assembly and maintenance. The bulkhead was designed to be injection molded without the need for side actions. Tolerances were determined through tolerance stacks."}]}},"links":[{"source":"Drawings - google drive link","url":"https://drive.google.com/drive/folders/1iTn56zyUluUUChYIXAQg9olTED8Rvdte?usp=sharing"}]},{"project_name":"Closed Loop Control Simulation","image_folder_path":"ME360_vibrations/","image_files":["full_model-min.png","beam_deflection-min.jpg"],"inProgress":false,"dates":"May 2023","info":{"tags":["SolidWorks","FEM","motion analysis","simulation","coursework"],"description":{"brief":"Simulated closed loop control of a vibratory system in SolidWorks","verbose":[{"title":"Assignment Goal","text":"The goal of this Electromechanical Design course assignment was to model the behavior of a friction-induced vibratory system and achieve a constant rotational velocity using closed-loop control."},{"title":"The System","text":"The target mechanism induces frictional vibration between surfaces, using a motor-driven shaft and a block at the end of a steel cantilever.  From this I created a simplified model using the SolidWorks Motion add-in, representing the deflection of the cantilever with a spring, and adding a constant force to keep the block in contact with the shaft.  The part materials were specified as neoprene rubber with the \u201crubber\u201d preset static and kinetic friction coefficients.  I also paid carful attention to the mates I used in order to prevent over-constraining the part with redundancies."},{"title":"Stick-Slip","text":"The oscillatory motion is produced by the spring-mass system.  As the shaft rotates, static friction drags the block upwards, stretching the spring and creating a downward force.  Once the spring force overcomes the friction from the shaft, the block slips and the friction reduces to kinetic friction."},{"title":"Modeling the System","text":"To estimate the spring constant, I used the SolidWorks simulation add-in to predict the deflection of the beam when loaded at one end, which gave the relationship between force and displacement.  I modeled the beam of 12 in length and a 1 in x 0.125 in cross section using Alloy Steel as the material and loaded it with 0.25 lb on one end, and fixed it at the other.  This produced a deflection of ~2.89E-5 in, or 0.0007329 mm.  Dividing the force of the load by the deflection produced k = 1517 N/m or about 8.66 lbf/in."},{"title":"Motion Analysis","text":"I attached a 30 rpm constant-speed motor to the shaft and plotted the output.  For closed loop control, I replaced the motor with an equation-defined torque.  Plotting the angular velocity allowed me to use the instantaneous values in the equation and implement the proportional element of PID tuning.  I defined the torque as some constant, kp, times the difference between the target and instantaneous velocities.  For low values of kp, the motor was not able to overcome the force of friction.  For higher values, it would quickly approach and maintain a level just below the target speed.  I decided to go with kp=0.15 as larger values would cause my computer to crash."}]}},"links":[{"source":"CAD Models, Videos, and Additional Material","url":"https://drive.google.com/drive/folders/13ComfzsyDDjmLnW9dcTnrMQczEYyF_6x?usp=sharing"}]},{"project_name":"Seeder","image_folder_path":"ME360_seeder/","image_files":["seeder-min.png","seeder_hopper-min.jpg","seeder_actuation-min.png"],"inProgress":false,"dates":"Feb. 2023","info":{"tags":["SolidWorks","Arduino","G-Code","MatLAB","coursework"],"description":{"brief":"Automatic hydroponic seed planter","verbose":[{"title":"Project Goals","text":"The goal of this Electromechanical Design course assignment was to produce a 2.5-axis, belt-driven, cartesian motion system.  My teammate, Zachary Pinard, and I brainstormed ideas for functionality.  The seeder met our constraints on complexity, available resources, and our skillsets.  To clarify our objectives, we restricted the seeds to mustard seeds, which were spherical, and fairly uniform in size and shape."},{"title":"Hopper Mechanism","text":"The hopper and mechanical dispensing mechanism were chosen after considering alternative solutions such as a vibratory system, and a pneumatic pick-and-place system.  This would allow us to save time and reduce the risk of dropping seeds during conveyance.  Seeds could be loaded into the hopper in bulk, and would be dispensed by funneling them into a moving panel at the bottom of the hopper, which would then shift one seed at a time to an exit opening."},{"title":"Debugging the Hopper","text":"While we originally intended to use a stepper motor and lead screw to actuate the dispensing mechanism, we ran into complications with its gear ratio and had to come up with an alternate solution later into the project.  With the resources available, we chose to use a servo, and replaced the lead screw with a linkage mechanism.  At full speed, most of the seeds would miss or bounce out.  This was solved by regulating the servo\'s speed with pauses between incremental motions."},{"title":"Gantry Design","text":"Two pairs of steel shaft served as guide rails for the hopper.  Stepper motors drove timing belt pulleys to translate the system.  The y-axis rails were kept short to avoid bending the cantilevered rails.  Rigidity was further enforced by the use of hand-machined ABS parts, rather than FDM 3D-printed ones."},{"title":"Motion Control","text":"Motion and positioning were controlled by G-Code instructions sent to a MKS Arduino Mega board through the Repetier-Host 3D-printing software.  This worked perfectly for the grid layout of the seed bed.  A matlab script was written to generate the G-Code after tweaking speed parameters with hand-written G-Code.  To ensure repeatability, we used the width of an eraser to position the hopper at machine home coordinates upon running a new script."}]}},"links":[{"source":"Demo Video","url":"https://youtu.be/WHZUBET6zvY"},{"source":"Download Matlab Script to Generate Seedcode","path":"generateSeedCode.m"},{"source":"Download Seedcode G-Code","path":"seedcode.gcode"}]},{"project_name":"Gasket","image_folder_path":"ME360_gasket/","image_files":["gasket-assembly-min.jpg","gasket-drawing-min.jpg"],"inProgress":false,"dates":"Jan 2023","info":{"tags":["SolidWorks","CAD","CAM/CNC","GibbsCam","measurement","coursework"],"description":{"brief":"This gasket assignment for the Electromechanical Design course at Boston University.","verbose":[{"title":"Project Overview","text":"This project was an exercise in measurement and design.  We were given a metal part with locating pins and holes of varying geometry and tasked with producing a gasket which would match it to 0.005\\" of an inch."},"First, I took measurements with the caliper set provided, and recorded them on a rough sketch (not pictured because I may have lost it.  The one above was done afterwards for the fun of it.).  From this, I created a SolidWorks CAD file with the relevant part geometry.  To attain the ideal fits, I used a chart of ANSI standards as a sizing guide.  To produce the gasket, we were provided 1/32\\" thick PVC stock.  I created a CAM file from the CAD using GibbsCAM.  Because of the flexibility of PVC, I included an extra toolpath offset and a spring pass.  We were also advised to include an extra 0.003\\" all around, which I was hesitant to include, as it may have been redundant to the offsets I had already considered.  The machined part was slightly oversized, which confirmed my suspicions.  Out of curiosity, I remade the part without the extra 0.003\\" and it fit perfectly."]}},"links":[{"source":"Related CAD, CAM, and image Files","url":"https://drive.google.com/drive/folders/1fpWwhp8ZB6UEoqHbCn-4dvcjxxiQwDuY?usp=sharing"}]},{"project_name":"Four Bar Linkage","image_folder_path":"four_bar_crocodile/","image_files":["OOH_PRETTY-min.JPG","FULL_ANNOTATED_MECHANISM-min.jpg","DIMENSIONED_DIAGRAM-min.jpg"],"inProgress":false,"dates":"December, 2021","info":{"tags":["SolidWorks","motion analysis","CAD","coursework"],"description":{"brief":"A creative four bar linkage and motion analysis assignment for Intro to CAD at Boston University.","verbose":["It\'s a crocodile.  Gnarly dude."]}},"links":[{"source":"Motion Animation","url":"https://youtu.be/ZP0SirjnavY"},{"source":"Related CAD and Image Files","url":"https://drive.google.com/drive/folders/1LxsskODR8dU7cyAARbUfl33qxpuDLY1e?usp=share_link"}]},{"project_name":"Worlds Largest Kid-Powered Stomp Rocket","image_folder_path":"chitag_rocket/","image_files":["chitagRocketStageSetup-min.jpg","chitag_stomppads-min.jpeg","CAD_labeled-min.jpeg","front_seal-min.jpeg","rear_bulkhead-min.jpeg","handlebarGuardCAM-min.jpg"],"inProgress":false,"dates":"January 2019 to November 2019","info":{"tags":["SolidWorks","CAD","CAM/CNC","SolidCam","pneumatics","machining","lathe","mill","Smooth-On","3D printing"],"description":{"brief":"An 8-foot tall foam rocket used as an attraction at the Chicago Toy and Game Fair.","verbose":[{"title":"Project Background and Overview","text":"The goal of this project was to build something \\"awesome\\" to showcase at the Chicago Toy and Game Fair. My company\'s partnership with a certain well-known toy manufacturer made building a giant foam rocket launcher the obvious option. At the awards ceremony, we launched the rocket over the crowd of dinner guests. At the fair, kids lined up to pressurize the rocket by jumping on a group of four spring-loaded \\"stomp pads\\" (like a gymnastics springboard), and launched it by smacking a big red button. The kids loved it. The adults loved it. Nobody got hurt. I\'d call that a success."},{"title":"Mechanism Overview","text":"I fitted the spring-loaded \\"stomp pads\\" with foot-powered bicycle pumps to build air pressure in the launch chamber. During demos at the fair, we limited it to 35 psi. Pressing a red button ventilated pressure in the rear chamber of a large piston within the launch tube. The difference in pressure caused the piston to slide back, which opened a face seal in the front. The rocket, which was loaded onto the front of the launch tube, was then expelled with the escaping air."},{"title":"Stomp Pad Pressurization Mechanism","text":"I CNC machined marine grade plywood for the base and the jumping platform. I modified a foot-powered bicycle pump to connect to 1/4 npt pipe fittings. I press-fit the pump into channels cut into the base and added a strip of bent spring steel to provide extra springiness and a nylon webbing strip prevented the stomp pad from opening up too wide. I added aluminum handlebars and padded them with foam yoga blocks to prevent kids from smacking their heads on the handlebars. Rubber feet underneath the stomp pads and rubber stops within them cushioned the downstroke. The four stomp pads were connected with brackets for additional stability. The air hoses from the pads were joined at a manifold which was also connected to the launch button, a pressure gage, and the rear end of the launch tube."},{"title":"Launching Mechanism Resetting and Pressurizing","text":"The polycarbonate launch tube served as both the pressure vessel and launching mechanism for the rocket. I CNC machined and then turned a large plunger out of polycarbonate which divided the cylinder into two chambers. The plunger was connected to a cast urethane stopper by a thinner polycarbonate tube. In its initial state, the piston is situated toward the back of the launcher, the plunger is retracted, and the front chamber is open to the air. When air from the stomp pads initially entered the rear chamber, the minimal pressure pushed the piston forward, sealing off the face. A check valve in the plunger allowed air pressure to equalize between the chambers once the pressure reached the cracking pressure, and also prevented the backflow of air."},{"title":"Launching Mechanism","text":"Pushing a red button allowed air to escape from the rear piston chamber. The difference in pressure caused the piston to slide back. To create an \\"explosive\\" launching effect, rather than a sad hiss, I designed an additional mechanism for the front seal. The pressure behind the front seal kept it in place as the piston rod drew back along a stainless steel shaft, compressing a spring. I machined a hard stop collar for the shaft which, after making contact with another stop on the piston tube, pulled the shaft backward along with the face seal. With the front seal broken, the force of the spring instantaneously snapped the face seal further back, creating an even wider opening for air to escape. This generated the explosion of air required to launch the rocket."},{"title":"Design Considerations and Machining","text":"The entire mechanism was designed to easily serviceable. I used a combination of quick-disconnects, barbed fittings, and 1/4 npt threaded hose connectors for the air lines. Screws were standardized across assemblies. The rear bulkhead was attached with a bolt pattern to a rim which was fixed to the launching tube. This allowed me to re-grease the o-ring on the launcher piston. To machine the parts, I utilized CNC mills, manual mills and lathes. I nested aluminum pipe  for the handlebars and used grenade pins for height adjustment. I machined foam yoga blocks for the handlebar padding. I cast the urethane face seal over a CNC machined HDPE part, which I used to connect it to the steel shaft with a series of turned parts, shaft collars, and a PVC pipe fitting from McMaster which I machined the *heck* out of. The launcher piston was machined in two halves out of polycarbonate which I then bonded together, turned on a lathe and tapped. I attached the front bulkhead with a ring of steel pins and added an o-ring to seal it. I press fit six steel rods into the front bulkhead to serve as guide rails for the front seal plunger. I designed the rocket to resemble a toy rocket in CAD, and we had it cut out of hard foam by an outside supplier. I 3D printed a mold and cast the nose cones out of urethane. We glued the sections together and inserted a thin polycarbonate tube in the center for reinforcement and wrapped the whole damn thing in vinyl decals. I could go on..."},{"title":"Challenges","text":"I spent a fair amount of time experimenting with adhesives as many caused crazing in the acrylic bulkheads. I also had to develop a strategy for casting the nose cones without bubbles. This was solved by using a vacuum chamber to degass the casting mixture and ventilation holes in the top of the mold to allow heat and gas to escape. During the fair, the bolts in the stomp pads would occasionally unscrew themselves which I would then discretely pocket\u2013which was not great. The plywood stomp pads also ripped themselves apart. I re-machined the stomp pads out of Polypropylene and used loctite on all of the bolts. The nose cones had a tendency to snap off and we had to glue them back on during the fair. This could be solved by reinforcing the nose cone connection to the rocket body."}]}},"links":[{"source":"Video: Prototype 50 psi test launch","url":"https://youtu.be/9N14jaQVq4c"},{"source":"Video: Explanation of mechanism design on Kite and Rocket Website","url":"https://kiteandrocket.com/krvideo/the-making-of-the-worlds-largest-kid-powered-ten-foot-rocket/"},{"source":"Video: Awards ceremony launch on Kite and Rocket Website","url":"https://kiteandrocket.com/krvideo/worlds-largest-kid-powered-rocket/"}]},{"project_name":"Vacuum Splint","image_folder_path":"vacuum_splint/","image_files":["vacuumsplint-min.jpg","vacuum_splint_semiassembled-min.jpeg"],"inProgress":false,"dates":"April 2021 to July 2021","info":{"tags":["casting","3D printing","FDM","rotocasting","Smooth-On","SolidWorks","CAD","machining","lathe","mill"],"description":{"brief":"This device addresses the symptoms of Peyronie\'s disease which is caused by scar tissue formation on the penis.","verbose":["The project was proposed by a doctor in the field who believed that the current solutions were bulky and ineffective.  I came up with a modularized mechanical solution to the problem inspired by the splint I used when I broke my hand.","The design consists of a foam pad which puts pressure on the bend and can be adjusted by thumbscrew.  The housing was FDM 3D printed.  To maintain the required vacuum seal, I turned multiple segments of polycarbonate tube which could be stacked together and interface with the vacuum pump.  By request, I started another prototype for a balloon-style pressure mechanism.  To manufacture the balloon, I tried to rotocast urethane with a mechanism I built, but could not achieve a consistent wall thickness.  My final mold design before leaving the project required a polyurethane melt-away core (expensive, I know), but we found the inflation to be difficult to control, inconsistent, and potentially dangerous.  The client ultimately agreed that a mechanical screw mechanism would be the preferred choice."]}},"links":[{"source":"Video: Demo of screw mechanism prototype","url":"https://youtube.com/shorts/PqT1VKvN9DI?feature=share"}]},{"project_name":"Kite and Rocket Wordpress Theme","image_folder_path":"","image_files":["kiteandrocketDesktopScreenshot-min.png"],"inProgress":false,"dates":"Aug 2020 to Jul 2021","info":{"tags":["PHP","Wordpress","Blade","jquery","javascript","html+css","wistia","webdev"],"description":{"brief":"This project entailed the complete teardown and reconstruction of the Kite and Rocket website.","verbose":["Having never used wordpress or PHP before, I was tasked with digging through the source code and figuring out how everything worked under the hood.  In addition to cleaning up layers of overwritten code, updating packages, and redesigning the UI, I implemented mobile-responsive breakpoints, a touchscreen-friendly swipeable carousel, video sharing functionality, amongst other improvements.  I also improved upon the wordpress dashboard interface and created a custom wordpress post type plugin.  In the main directory I left a readme file with careful documentation and usage instructions for the next webmaster.  Note: the website in its current state may not accurately reflect the last version I worked on."]}},"links":[{"source":"Source Code on Github","url":"https://github.com/anyakeller/k-and-r-revamp"},{"source":"Kite and Rocket Live Website","url":"http://kiteandrocket.com/"}]},{"project_name":"Star Trek Themed Word Guessing Game","image_folder_path":"","image_files":["hangmanScreenshot-min.png"],"inProgress":false,"dates":"Sep 2019","info":{"tags":["jquery","javascript","html+css","webdev","coursework"],"description":{"brief":"It\'s hangman. With Star Trek.","verbose":["Whoop dee doo."]}},"links":[{"source":"Source Code on Github","url":"https://anyakeller.github.io/word_guess_game/"}]},{"project_name":"Magic Music Matcher","image_folder_path":"","image_files":["magicMusicMatcherScreenshot-min.png"],"inProgress":false,"dates":"Jan 2017","info":{"tags":["python","flask","jquery","javascript","html+css","webdev","coursework"],"description":{"brief":"Web application utilizing python flask for song generation.","verbose":["Features include an interactive selection map that generates songs from a random other country with similar characteristics, a song search bar for doing the same with a specific song, a login system with saving songs to your profile,and an embedded spotify player."]}},"links":[{"source":"Video: Demo","url":"https://www.youtube.com/watch?v=QIIgQ24DRZw&feature=youtu.be"},{"source":"Source Code on Github","url":"https://github.com/Bayless/The-Chosen-Tarsiers"}]},{"project_name":"Auto-Balancing Binary Search Tree","image_folder_path":"","image_files":["BSTscreenshot-min.png"],"inProgress":false,"info":{"tags":["java","algorithms","coursework"],"description":{"brief":"A visualizer for binary search trees written in Java that will automatically sort a random array of numbers and produce a balanced tree.","verbose":[""]},"demo_ins":"Run visualizer with $java VisualTree Run sorting algo with $java BST"},"links":[{"source":"Source Code on Github","url":"https://github.com/anyakeller/BST_FP"}]},{"project_name":"Tile Puzzle","image_folder_path":"","image_files":["tilePuzzleScreenshot-min.png"],"inProgress":false,"info":{"tags":["java","coursework"],"description":{"brief":"A 3 by 3 sliding tile puzzle game built using Java. Clickable tiles allow sliding to complete the picture. Two sorting algorithms are available to solve the puzzle move by move.","verbose":[""]},"demo_ins":"Compile files using javac and run $java PuzzleWindow to play and $java Puzzle to see the algorithm in action"},"links":[{"source":"Source Code on Github","url":"https://github.com/st234pa/TilePuzzle2"}]}]')},49:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},56:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(11),r=a.n(i);a(54),a(55);var s=function(e){return n.a.createElement("div",{className:"bg-gradient-light mx-auto shadow-sm px-4 py-4",style:{maxWidth:"690px"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-8 d-flex flex-column"},n.a.createElement("h1",null,n.a.createElement("small",{className:"text-muted text-small mr-2 d-block d-sm-inline"},"a bit about"),n.a.createElement("span",{className:"display-5"}," Anya Keller")),n.a.createElement("p",{className:"lead pl-2 mt-2",style:{whiteSpace:"pre-line"}},"Sometimes I make things.","\n","Sometimes I design things.","\n","Sometimes I write code.","\n","\n","BS in Mechanical Engineering, Manufacturing","\n","Full-stack website developer","\n"),n.a.createElement("span",{className:"d-flex justify-content-around text-center"},n.a.createElement("a",{href:"Anya_Keller_Resume.pdf",download:!0},n.a.createElement("i",{className:"fa-solid fa-file-arrow-down"})," Resume"),n.a.createElement("a",{href:"https://github.com/anyakeller"},n.a.createElement("i",{className:"fa-brands fa-github"})," Github"),n.a.createElement("a",{href:"https://www.linkedin.com/in/anya-keller-7914b297/"},n.a.createElement("i",{className:"fa-brands fa-linkedin"})," Linkedin"))),n.a.createElement("div",{className:"col d-flex flex-column justify-content-center px-5 px-md-1 mt-3 mt-md-2"},n.a.createElement("img",{className:"d-block mx-auto img-fluid",src:"/portfolio/lathework.jpg",alt:"profile img"}),n.a.createElement("small",{className:"d-block text-center text-muted"},"This might be my face"))))},l=a(6),c=a(41),d=a(45),h=(a(56),a(36)),m=a(46);var u=function(e){var t=e.projectData;return n.a.createElement("div",{className:"col my-1"},n.a.createElement("div",{className:"card shadow h-100 project-card",onClick:function(a){a.stopPropagation(),e.handleProjectClick(t)},role:"button"},n.a.createElement("small",{className:"card-header text-center"}," ",t.dates),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-center mb-3"},t.project_name),n.a.createElement(d.a,{className:"card-img",src:"/portfolio/project-media/"+t.image_folder_path+t.image_files[0],alt:t.image_files[0]}),n.a.createElement("p",{className:"card-text mt-4 mb-0"},t.info.description.brief),n.a.createElement("p",{className:"text-center m-0 text-muted read-more"},n.a.createElement(m.a,{variant:"link",className:"text-decoration-none py-0 text-muted"},"Read More"))),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement(h.a.Item,null,function(){if(t.links.length>0)return t.links.map((function(e,a){return n.a.createElement("a",{className:"d-block pb-1",key:a,href:e.url?e.url:"/portfolio/project-media/"+t.image_folder_path+e.path,onClick:function(e){e.stopPropagation()},target:"_blank"},e.source)}))}())),n.a.createElement("div",{className:"card-footer"},function(){if(t.info.tags.length>0)return t.info.tags.map((function(e,t){return n.a.createElement("span",{className:"badge rounded-pill bg-dark me-1",key:t},e)}))}())))};function p(e){return e.projects.map((function(t,a){return n.a.createElement(u,{key:a,projectData:t,handleProjectClick:e.handleProjectClick})}))}var g=a(69),f=a(66),b=a(67),w=a(68),y=a(47),v=a(42);function k(e){var t=e.imageFiles,a=e.image_folder_path;return t.length>1?n.a.createElement(v.a,{className:"rounded",style:{overflow:"hidden"}},t.map((function(e,t){return n.a.createElement(v.a.Item,{key:t},n.a.createElement(d.a,{className:"d-block w-100",src:"/portfolio/project-media/"+a+e,alt:"First slide"}))}))):n.a.createElement(d.a,{className:"card-img",src:"/portfolio/project-media/"+a+t[0],alt:t[0]})}var E=function(e){var t=e.projectDetailModalShow,a=e.handleClose;return n.a.createElement(g.a,{size:"lg",show:t,onHide:a},n.a.createElement(y.a,null,n.a.createElement(g.a.Header,{closeButton:!0,className:"py-2"},n.a.createElement("small",{className:"text-muted"},e.selectedProject.dates)),n.a.createElement(g.a.Body,null,n.a.createElement(g.a.Title,{className:"text-center"},e.selectedProject.project_name),n.a.createElement(f.a,{fluid:!0},n.a.createElement(b.a,null,n.a.createElement(w.a,null,n.a.createElement("p",null," ",e.selectedProject.info.description.brief))),n.a.createElement(b.a,{className:"align-items-center justify-content-center"},n.a.createElement(w.a,{lg:8},n.a.createElement(k,{imageFiles:e.selectedProject.image_files,image_folder_path:e.selectedProject.image_folder_path}))),n.a.createElement(b.a,null,n.a.createElement(w.a,{className:"text-center"})),n.a.createElement(b.a,null,n.a.createElement(w.a,{className:"pt-4"},n.a.createElement("ul",{className:"list-group list-group-flush"},e.selectedProject.info.description.verbose.map((function(e,t){return n.a.createElement(h.a.Item,{key:t},n.a.createElement("div",{className:"ms-2 me-auto"},e.title?n.a.createElement("span",null,n.a.createElement("div",{className:"fw-bold"}," ",e.title," ")," ",e.text," "):e))}))))),n.a.createElement(b.a,{className:"pt-1"},n.a.createElement(w.a,null,function(){if(e.selectedProject.links.length>0)return e.selectedProject.links.map((function(t,a){return n.a.createElement("a",{className:"d-block",key:a,href:t.url?t.url:"/portfolio/project-media/"+e.selectedProject.image_folder_path+t.path,target:"_blank"},t.source)}))}())))),n.a.createElement(g.a.Footer,{className:"justify-content-center"},function(){if(e.selectedProject.info.tags.length>0)return e.selectedProject.info.tags.map((function(e,t){return n.a.createElement("span",{className:"badge rounded-pill bg-dark me-1",key:t},e)}))}())))};var _=function(e){var t=Object(o.useState)(!1),a=Object(l.a)(t,2),i=a[0],r=a[1],s=Object(o.useState)(c[0]),d=Object(l.a)(s,2),h=d[0],m=d[1];return n.a.createElement("div",null,n.a.createElement(E,{handleClose:function(){return r(!1)},projectDetailModalShow:i,selectedProject:h}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"bg-gradient-light mx-auto shadow px-4 py-4 my-2 clearfix",style:{maxWidth:"690px"}},n.a.createElement("div",{className:"mb-3 mb-md-0"},n.a.createElement("h1",null,n.a.createElement("span",{className:"display-4"},"Projects")),n.a.createElement("p",{className:"lead pl-2",style:{whiteSpace:"pre-line"}},"Click a project tile for details"),n.a.createElement("small",{className:"text-muted float-right"},"This website is a work in progress and the interface is a bit wonky. I'd appreciate any suggestions! Enumerate your grievances through my",n.a.createElement("a",{href:"https://forms.gle/3nZbHCbicy8cQ8rb7"}," Google Form "),"or through",n.a.createElement("a",{href:"https://github.com/anyakeller/portfolio/issues"}," Github Issues ")))))),n.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3"},n.a.createElement(p,{projects:c,handleProjectClick:function(e){r(!0),m(e)}})))};function j(){return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/portfolio"},"Anya Keller")))}function x(){return n.a.createElement("footer",{className:"bg-dark text-light py-2"},n.a.createElement("div",{className:"row mx-0"},n.a.createElement("div",{className:"col text-center"},n.a.createElement("small",null,n.a.createElement("a",{href:"https://github.com/anyakeller/portfolio"},"View Source Code"))),n.a.createElement("div",{className:"col text-center"},n.a.createElement("small",null,"Built with React.js"))))}var I=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(j,null),n.a.createElement("div",{className:"container pt-3 pb-2"},n.a.createElement(s,null)),n.a.createElement("div",{className:"container mt-3 pt-3 pb-2 mb-4"},n.a.createElement(_,null)),n.a.createElement("div",{className:"container-fluid px-0"},n.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.e5d4df61.chunk.js.map