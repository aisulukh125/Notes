let notes = [];//array where notes will be stored

function closeInputBlock() {//closing input box
	inputBlock = document.getElementById("inputBlock");
	inputCancel = document.getElementById("inputCancel");
	inputBlock.parentNode.removeChild(inputBlock);
	inputCancel.parentNode.removeChild(inputCancel);
};

function closePrintBlock() {//closing print box
	printBlock = document.getElementById("printBlock");
	inputCancel = document.getElementById("inputCancel");
	printBlock.parentNode.removeChild(printBlock);
	inputCancel.parentNode.removeChild(inputCancel);
};

function newNote() {//adding new note by creating an object note and adding it to the end of array and closing input box
	var inputBlock = document.getElementById('inputBlock');
	var todoPoints = document.querySelectorAll('.todoText');
	var todoCheck = document.querySelectorAll('.todoCheck');	
	let note = {
		name: document.getElementById('noteName').value,
		todoText: [],
		todoChecking: [],	
	}
	for(let item of todoPoints){
		note.todoText.push(item.value);
	}
	for(let item of todoCheck){
		note.todoChecking.push(item.checked);
	}
	notes.push(note);
	closeInputBlock();
};

function addNote() {//function that creates new block for input and when submitted adds new note to notes
	var inputBlock = document.createElement("div");
	document.body.appendChild(inputBlock);
	inputBlock.id = "inputBlock";
	var inputHeading = document.createElement("h1");
	inputBlock.appendChild(inputHeading);
	inputHeading.innerHTML = "Добавить новую заметку";

	var noteName = document.createElement("input");
	inputBlock.appendChild(noteName);
	noteName.type = "text";
	noteName.id = "noteName";
	noteName.placeholder = "Название заметки";

	var todo = document.createElement("div");
	inputBlock.appendChild(todo);

	var todoPoint = document.createElement("div");
	todo.appendChild(todoPoint);
	
	var todoCheck = document.createElement("input");
	todoPoint.appendChild(todoCheck);
	todoCheck.type = "checkbox";
	todoCheck.classList.add("todoCheck");

	var todoText = document.createElement("input");
	todoPoint.appendChild(todoText);
	todoText.type = "text";
	todoText.classList.add("todoText");
	todoText.placeholder = "Новая задача";

	var addPoint = document.createElement("i");
	inputBlock.appendChild(addPoint);
	addPoint.classList.add("fa");
	addPoint.classList.add("fa-plus");
	addPoint.classList.add("btn");
	addPoint.classList.add("btn-outline-info");
	addPoint.onclick = function() {
		var todoPoint = document.createElement("div");
		todo.appendChild(todoPoint);

		var todoCheck = document.createElement("input");
		todoPoint.appendChild(todoCheck);
		todoCheck.type = "checkbox";
		todoCheck.classList.add("todoCheck");
		
		var todoText = document.createElement("input");
		todoPoint.appendChild(todoText);
		todoText.type = "text";
		todoText.classList.add("todoText");
		todoText.placeholder = "Новая задача";
	};

	var submitButton = document.createElement("button");
	inputBlock.appendChild(submitButton);
	submitButton.type = "button";
	submitButton.id = "submitButton";
	submitButton.classList.add("btn");
	submitButton.classList.add("btn-outline-info");
	submitButton.innerHTML = "Сохранить заметку";	
	submitButton.onclick = newNote;

	

   var inputCancel = document.createElement("div");
   inputCancel.id = "inputCancel";
   document.body.appendChild(inputCancel);
	inputCancel.onclick = closeInputBlock;
}

function printNotes() {//function that creates new block for printing all notes
	var printBlock = document.createElement("div");
	document.body.appendChild(printBlock);
	printBlock.id = "printBlock";
	var printHeading = document.createElement("h1");
	printBlock.appendChild(printHeading);
	printHeading.innerHTML = "Заметки";

	var allNotes = document.createElement("div");
	printBlock.appendChild(allNotes);
	allNotes.id = "allNotes";

	for(let m of notes){
		var todoNote = document.createElement("div");
		todoNote.classList.add("note");
		var nameOfNote = document.createElement("h4");
		todoNote.appendChild(nameOfNote);
		nameOfNote.innerHTML = m.name;
		allNotes.appendChild(todoNote);
		for(let i = 0; i < m.todoChecking.length; i++){
			var todoPoint = document.createElement("div");
			todoPoint.classList.add("todoPoint");
			todoNote.appendChild(todoPoint);
			
			var checking = document.createElement("input");
			todoPoint.appendChild(checking);
			checking.type = "checkbox";
			checking.checked = m.todoChecking[i];
			checking.onclick = function() {
				m.todoChecking[i] = checking.checked;
			}
			checking.classList.add("todoCheck");

			var todoText = document.createElement("p");
			todoPoint.appendChild(todoText);
			todoText.classList.add("todoText");
			todoText.innerHTML = m.todoText[i];

			var deletePoint = document.createElement("i");
			todoPoint.appendChild(deletePoint);
			deletePoint.classList.add("fa");
			deletePoint.classList.add("fa-trash");
			deletePoint.classList.add("btn");
			deletePoint.classList.add("btn-outline-primary");
			deletePoint.onclick = function() {
				this.parentNode.parentNode.removeChild(this.parentNode);
				m.todoChecking.splice(i, 1);
				m.todoText.splice(i, 1);
			}; 
		}
		var deleteTodo = document.createElement("i");
		todoNote.appendChild(deleteTodo);
		deleteTodo.classList.add("fa");
		deleteTodo.classList.add("fa-trash");
		deleteTodo.classList.add("btn");
		deleteTodo.classList.add("btn-outline-info");
		deleteTodo.onclick = function() {
			this.parentNode.parentNode.removeChild(this.parentNode);
			notes.splice(notes.indexOf(m), 1);
		}; 
	}
	var inputCancel = document.createElement("div");
   inputCancel.id = "inputCancel";
   document.body.appendChild(inputCancel);
	inputCancel.onclick = closePrintBlock;
};