# To Do List

This is a todo list project for The Odin Project. It is made with html, css, and vanilla javascript.The users projects and to do events are saved in localStorage.


When you start the app for the first time you'll see this:
<img src="https://i.imgur.com/KaXm7Ai.png">


If you try to add an event it will tell you to make a project.


After making a project you will be able to add events to that project. Each project and event has a unique id. When you add a todo event the currentProjects id will be saved to the projectId of the event.
<img src="https://i.imgur.com/RAOU4qa.png">


After creating an event it will appear on the screen. It is color coded red for hard, yellow for medium, and green for easy. You can delete an individual event with the delete button and edit an event with the edit button. 


The edit button brings up an identical form to the add event button. You can change as many fields as you want at once. 


If you click directly on the event it will show a pop up.
<img src="https://i.imgur.com/HUH6gjx.png">


If you make a project and you decide for some reason you want to delete the project, you can click the red x next to the project in order to delete it. To prevent accidental deletions, you will be prompted to confirm your choice, before anything is deleted.


When you delete a project all the events that have a projectId matching the project that is being deleted, are deleted as well.
<img src="https://i.imgur.com/ePZTpz0.png">
<img src="https://i.imgur.com/vZ3oHfa.png">

**[Live Demo](https://lucas-odonnell.github.io/toDoApp/)**
