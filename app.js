// pdf 43to-48
// task 1

// Function to show alert
function showAlert() {
    alert('Thanks for pursching for user!'); // Message to display in the alert
}

// Add click event to the link
var alertLink = document.getElementById('alertLink');
alertLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior
    showAlert(); // Call the showAlert function
};

// task 2
//   Function to show alert
  function showAlert(imageName) {
    alert('You clicked on ' + imageName + '!'); // Message to display in the alert
}

// Add click event to each image
var images = document.getElementsByClassName('mobile-image');
for (var i = 0; i < images.length; i++) {
    images[i].onclick = (function(index) {
        return function() {
            showAlert('Mobile ' + (index + 1)); // Custom message for each image
        };
    })(i);
}



// // task3
function deleteRow(button) {
    // Find the row of the button that was clicked
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}


// task4
var img = document.getElementById('myImage');
        var originalSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkL_Ns6zGNiEwT-aRnMR109YSYYSg9a7Dxg&s'; // Original image source
        var hoverSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSlN-ntAFZj3b1Fl8pEh0juF_Vge17Tf9jg&s'; // Image source on click
        var clicked = false; // Track whether the image has been clicked

        img.addEventListener('click', function() {
            clicked = true; // Set clicked to true on image click
            img.src = hoverSrc; // Change image to hoverSrc on click
        });

        img.addEventListener('mouseover', function() {
            if (clicked) {
                img.src = hoverSrc; // Change image on mouseover if clicked
            }
        });

        img.addEventListener('mouseout', function() {
            if (clicked) {
                img.src = originalSrc; // Change back to original on mouseout if clicked
            }
        });

        // task 5 
        var counterValue = 0; // Initialize counter value
        var counterDisplay = document.getElementById('counter'); // Get counter display element

        // Function to update the counter display
        function updateCounterDisplay() {
            counterDisplay.textContent = counterValue; // Update the displayed counter value
        }

        // Increase button event listener
        document.getElementById('increaseButton').addEventListener('click', function() {
            counterValue++; // Increase counter value
            updateCounterDisplay(); // Update display
        });

        // Decrease button event listener
        document.getElementById('decreaseButton').addEventListener('click', function() {
            counterValue--; // Decrease counter value
            updateCounterDisplay(); // Update display
        });


        // pdf49to52


        // task1
         // Get the form and output elements
         var form = document.getElementById('signupForm');
         var output = document.getElementById('output');
 
         // Add event listener for form submission
         form.addEventListener('submit', function(event) {
             event.preventDefault(); // Prevent the default form submission
 
             // Get form data
             var username = document.getElementById('username').value;
             var email = document.getElementById('email').value;
             var password = document.getElementById('password').value;
 
             // Display form data
             output.innerHTML = '<h2>Submitted Data:</h2>' +
                                '<p><strong>Username:</strong> ' + username + '</p>' +
                                '<p><strong>Email:</strong> ' + email + '</p>' +
                                '<p><strong>Password:</strong> ' + password + '</p>';
             
             // Optionally, clear the form
             form.reset();
         });

        //  task2 pdf2
         // Get all "Read More" buttons
         var buttons = document.getElementsByClassName('read-more');

         // Loop through buttons and add click event listeners
         for (var i = 0; i < buttons.length; i++) {
             buttons[i].addEventListener('click', function() {
                 // Toggle the display of the full details
                 var fullDetails = this.previousElementSibling; // Get the full details div
                 if (fullDetails.style.display === "none" || fullDetails.style.display === "") {
                     fullDetails.style.display = "block"; // Show full details
                     this.textContent = "Read Less"; // Change button text
                 } else {
                     fullDetails.style.display = "none"; // Hide full details
                     this.textContent = "Read More"; // Change button text back
                 }
             });
         }

        //  task2 pdf2


        studentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
    
            // Get form values
            var name = document.getElementById('studentName').value;
            var age = document.getElementById('studentAge').value;
            var grade = document.getElementById('studentGrade').value;
    
            // Create a new row
            var newRow = studentTable.insertRow();
    
            // Insert cells
            newRow.insertCell(0).textContent = name;
            newRow.insertCell(1).textContent = age;
            newRow.insertCell(2).textContent = grade;
    
            // Create action buttons
            var actionsCell = newRow.insertCell(3);
            var editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
    
            // Append buttons to actions cell
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
    
            // Add event listener for delete button
            deleteButton.addEventListener('click', function() {
                studentTable.deleteRow(newRow.rowIndex - 1); // Delete the row
            });
    
            // Add event listener for edit button
            editButton.addEventListener('click', function() {
                // Show edit form
                var editForm = document.createElement('div');
                editForm.className = 'edit-form';
                editForm.innerHTML = `
                    <input type="text" value="${name}" placeholder="Student Name" required />
                    <input type="number" value="${age}" placeholder="Student Age" required />
                    <input type="text" value="${grade}" placeholder="Student Grade" required />
                    <button class="save-button">Save</button>
                    <button class="cancel-button">Cancel</button>
                `;
                newRow.appendChild(editForm);
    
                // Add event listener for save button
                editForm.querySelector('.save-button').addEventListener('click', function() {
                    var updatedName = editForm.querySelector('input[type="text"]').value;
                    var updatedAge = editForm.querySelector('input[type="number"]').value;
                    var updatedGrade = editForm.querySelector('input[type="text"]:nth-of-type(2)').value;
    
                    // Update the row with new values
                    newRow.cells[0].textContent = updatedName;
                    newRow.cells[1].textContent = updatedAge;
                    newRow.cells[2].textContent = updatedGrade;
    
                    // Remove the edit form
                    newRow.removeChild(editForm);
                });
    
                // Add event listener
                                // Add event listener for cancel button
                                editForm.querySelector('.cancel-button').addEventListener('click', function() {
                                    // Remove the edit form without saving
                                    newRow.removeChild(editForm);
                                });
                            });
                
                            // Clear the input fields after adding the student
                            studentForm.reset();
                        });
                 