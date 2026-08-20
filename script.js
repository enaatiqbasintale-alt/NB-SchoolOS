function switchTab(tabId, event) {
    // Hide all tab sections
    const sections = document.querySelectorAll('.tab-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected tab section
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // Update active class on navigation items
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
function filterTable() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    // You can expand this to filter your lists or cards as needed
    console.log("Searching for: " + filter);
}
function addTeacher() {
    let nameInput = document.getElementById('teacherNameInput');
    let subjectInput = document.getElementById('teacherSubjectInput');
    let teacherList = document.getElementById('teacherList');

    if (nameInput.value.trim() === '' || subjectInput.value.trim() === '') {
        alert('Please fill in both fields!');
        return;
    }

    // Create new element for the list
    let newDiv = document.createElement('div');
    newDiv.style.cssText = "padding: 10px; border-bottom: 1px solid #eee;";
    newDiv.innerHTML = `${nameInput.value} <span style="float: right; background: #e0e0ff; padding: 2px 8px; border-radius: 4px; font-size: 12px;">${subjectInput.value}</span>`;

    // Add it to the top of the teacher list
    teacherList.prepend(newDiv);

    // Clear inputs
    nameInput.value = '';
    subjectInput.value = '';
}
function addStudent() {
    let nameInput = document.getElementById('studentNameInput');
    let classInput = document.getElementById('studentClassInput');
    let studentList = document.getElementById('studentList');

    if (nameInput.value.trim() === '' || classInput.value.trim() === '') {
        alert('Please fill in both fields!');
        return;
    }

    // Create new element for the list
    let newDiv = document.createElement('div');
    newDiv.style.cssText = "padding: 10px; border-bottom: 1px solid #eee;";
    newDiv.innerHTML = `${nameInput.value} <span style="float: right; background: #e0e0ff; padding: 2px 8px; border-radius: 4px; font-size: 12px;">${classInput.value}</span>`;

    // Add it to the top of the student list
    studentList.prepend(newDiv);

    // Clear inputs
    nameInput.value = '';
    classInput.value = '';
}
function updateCounts() {
    let totalStudents = document.getElementById('studentList').children.length;
    let totalTeachers = document.getElementById('teacherList').children.length;

    document.getElementById('studentCount').innerText = totalStudents;
    document.getElementById('teacherCount').innerText = totalTeachers;
}
function deleteItem(buttonElement) {
    // This finds the parent row (the <div>) and removes it from the list
    let itemRow = buttonElement.parentElement;
    itemRow.remove();
    
    // Update the dashboard counts right after deleting
    updateCounts();
}
// Load saved data when the page opens
window.onload = function() {
    let savedTeachers = localStorage.getItem('rightHopeTeachers');
    let savedStudents = localStorage.getItem('rightHopeStudents');

    if (savedTeachers) {
        document.getElementById('teacherList').innerHTML = savedTeachers;
    }
    if (savedStudents) {
        document.getElementById('studentList').innerHTML = savedStudents;
    }

    updateCounts();
};

function saveLists() {
    let teacherHTML = document.getElementById('teacherList').innerHTML;
    let studentHTML = document.getElementById('studentList').innerHTML;

    localStorage.setItem('rightHopeTeachers', teacherHTML);
    localStorage.setItem('rightHopeStudents', studentHTML);
}
