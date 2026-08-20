q
 // Tab Switching Function
function switchTab(tabId, event) {
    // Hide all sections with class 'tab-section'
    const sections = document.querySelectorAll('.tab-section, .tab');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected tab
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // Update active state on nav links if event is passed
    if (event && event.currentTarget) {
        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }
}

// Dynamic Student Addition
function addStudent() {
    const nameInput = document.getElementById('studentNameInput');
    const classInput = document.getElementById('studentClassInput');
    
    const name = nameInput.value.trim();
    const studentClass = classInput.value.trim();

    if (!name || !studentClass) {
        alert('Please enter both the student name and class.');
        return;
    }

    // 1. Add to Student List Container
    const studentList = document.getElementById('studentList');
    if (studentList) {
        const newListItem = document.createElement('div');
        newListItem.style.cssText = 'padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;';
        newListItem.innerHTML = `
            <span>${name} <span style="background: #e0e0ff; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-left: 10px;">${studentClass}</span></span>
            <button onclick="deleteItem(this)" style="background: #ff4d4d; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px;">Delete</button>
        `;
        studentList.appendChild(newListItem);
    }

    // 2. Add to Daily Attendance Tracker Table
    const attendanceTableBody = document.querySelector('#students table tbody'); // Adjust if needed
    // We can target specific tables by checking their headers or containers. 
    // Let's add a row to the Attendance table:
    const tables = document.querySelectorAll('#students table');
    if (tables.length > 0) {
        // Attendance table is usually the first or second table in the student section
        const attendanceBody = tables[0].querySelector('tbody');
        if (attendanceBody) {
            const attRow = document.createElement('tr');
            attRow.style.borderBottom = '1px solid #eee';
            attRow.innerHTML = `
                <td style="padding: 8px;">${name}</td>
                <td style="padding: 8px;"><input type="checkbox" checked> Present</td>
            `;
            attendanceBody.appendChild(attRow);
        }

        // 3. Add to Grade & Tracker Table (Second table)
        if (tables.length > 1) {
            const gradeBody = tables[1].querySelector('tbody');
            if (gradeBody) {
                const gradeRow = document.createElement('tr');
                gradeRow.style.borderBottom = '1px solid #eee';
                gradeRow.innerHTML = `
                    <td style="padding: 8px;">${name}</td>
                    <td style="padding: 8px;">75%</td>
                    <td style="padding: 8px; font-weight: bold; color: #4e73df;">C</td>
                `;
                gradeBody.appendChild(gradeRow);
            }
        }
    }

    // Clear input fields
    nameInput.value = '';
    classInput.value = '';
    
    alert('Student added successfully across all trackers!');
}

// Generic Delete Function
function deleteItem(button) {
    const rowOrItem = button.closest('div') || button.closest('tr');
    if (rowOrItem) {
        rowOrItem.remove();
    }
}   
    
// Dynamic Teacher Addition
function addTeacher() {
    const nameInput = document.getElementById('teacherNameInput');
    const subjectInput = document.getElementById('teacherSubjectInput');
    
    const name = nameInput.value.trim();
    const subject = subjectInput.value.trim();

    if (!name || !subject) {
        alert('Please enter both the teacher\'s full name and the subject taught.');
        return;
    }

    // Add to Teacher List (matching your id="teacherList" in HTML)
    const teacherList = document.getElementById('teacherList');
    if (teacherList) {
        const newTeacherItem = document.createElement('div');
        newTeacherItem.style.cssText = 'padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;';
        newTeacherItem.innerHTML = `
            <span>${name} <span style="background: #e0e0ff; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-left: 10px;">${subject}</span></span>
            <button onclick="deleteItem(this)" style="background: #ff4d4d; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px;">Delete</button>
        `;
        teacherList.appendChild(newTeacherItem);
    }

    // Clear input fields
    nameInput.value = '';
    subjectInput.value = '';
    
    alert('Teacher added successfully to the faculty list!');
}
