document.addEventListener('DOMContentLoaded', () => {
    const assessments = [
        { id: 1, title: "Math Quiz 1", type: "quiz", date: "2024-08-20", popularity: 120, completionRate: 85 },
        { id: 2, title: "History Assignment 2", type: "assignment", date: "2024-08-22", popularity: 80, completionRate: 90 },
        // Add more sample assessments here
    ];

    const activities = [
        { id: 1, description: "Student John Doe submitted Math Quiz 1" },
        { id: 2, description: "Feedback given on History Assignment 2" },
        // Add more sample activities here
    ];

    const analytics = [
        { id: 1, title: "Math Quiz 1", averageScore: 75, completionRate: 85 },
        { id: 2, title: "History Assignment 2", averageScore: 80, completionRate: 90 },
        // Add more sample analytics here
    ];

    const assessmentList = document.getElementById('assessmentList');
    const activityList = document.getElementById('activityList');
    const analyticsList = document.getElementById('analyticsList');

    const renderAssessments = () => {
        assessmentList.innerHTML = assessments.map(a => 
            `<li>
                <strong>${a.title}</strong><br>
                Type: ${a.type} | Date: ${a.date} | Popularity: ${a.popularity} | Completion Rate: ${a.completionRate}%
                <div>
                    <button onclick="editAssessment(${a.id})">Edit</button>
                    <button onclick="viewAssessment(${a.id})">View</button>
                    <button onclick="manageAssessment(${a.id})">Manage</button>
                </div>
            </li>`
        ).join('');
    };

    const renderActivities = () => {
        activityList.innerHTML = activities.map(a => `<li>${a.description}</li>`).join('');
    };

    const renderAnalytics = () => {
        analyticsList.innerHTML = analytics.map(a => 
            `<li>
                <strong>${a.title}</strong><br>
                Average Score: ${a.averageScore} | Completion Rate: ${a.completionRate}%
            </li>`
        ).join('');
    };

    const editAssessment = (id) => {
        alert(`Edit assessment with ID ${id}`);
    };

    const viewAssessment = (id) => {
        alert(`View assessment with ID ${id}`);
    };

    const manageAssessment = (id) => {
        alert(`Manage assessment with ID ${id}`);
    };

    renderAssessments();
    renderActivities();
    renderAnalytics();

    document.getElementById('createAssessmentBtn').addEventListener('click', () => {
        window.location.href = '/create-assessment.html';
    });

    document.getElementById('searchBar').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredAssessments = assessments.filter(a => a.title.toLowerCase().includes(query));
        // Update the assessment list with filtered results
        assessmentList.innerHTML = filteredAssessments.map(a => 
            `<li>
                <strong>${a.title}</strong><br>
                Type: ${a.type} | Date: ${a.date} | Popularity: ${a.popularity} | Completion Rate: ${a.completionRate}%
                <div>
                    <button onclick="editAssessment(${a.id})">Edit</button>
                    <button onclick="viewAssessment(${a.id})">View</button>
                    <button onclick="manageAssessment(${a.id})">Manage</button>
                </div>
            </li>`
        ).join('');
    });

    document.getElementById('typeFilter').addEventListener('change', (e) => {
        const filterType = e.target.value;
        const filteredAssessments = assessments.filter(a => filterType === 'all' || a.type === filterType);
        // Update the assessment list with filtered results
        assessmentList.innerHTML = filteredAssessments.map(a => 
            `<li>
                <strong>${a.title}</strong><br>
                Type: ${a.type} | Date: ${a.date} | Popularity: ${a.popularity} | Completion Rate: ${a.completionRate}%
                <div>
                    <button onclick="editAssessment(${a.id})">Edit</button>
                    <button onclick="viewAssessment(${a.id})">View</button>
                    <button onclick="manageAssessment(${a.id})">Manage</button>
                </div>
            </li>`
        ).join('');
    });

    document.getElementById('sortOptions').addEventListener('change', (e) => {
        const sortOption = e.target.value;
        let sortedAssessments = [...assessments];
        if (sortOption === 'date') {
            sortedAssessments.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortOption === 'popularity') {
            sortedAssessments.sort((a, b) => b.popularity - a.popularity);
        } else if (sortOption === 'completion') {
            sortedAssessments.sort((a
