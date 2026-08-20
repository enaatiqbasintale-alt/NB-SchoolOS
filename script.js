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
