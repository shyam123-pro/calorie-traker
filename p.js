document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const date = document.getElementById('date').value;
    
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardCourse').textContent = course;
    document.getElementById('cardDate').textContent = date;
    
    document.getElementById('cardPreview').style.display = 'block';
});
