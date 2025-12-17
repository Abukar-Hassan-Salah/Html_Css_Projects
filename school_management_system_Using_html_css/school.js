// add student
document.getElementById('studentForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const table=document.getElementById('studentTable');
    const id=document.getElementById('studentId').value;
    const name=document.getElementById('studentName').value;
    const cls=document.getElementById('studentClass').value;
    const age=document.getElementById('studentAge').value;
    table.innerHTML+=`
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${cls}</td>
            <td>${age}</td>
        </tr>
    `;
    this.reset();
});

// add attendance
document.getElementById('attendanceForm')?.addEventListener('submit',function(e){
    e.preventDefault();
    const table=document.getElementById('attendanceTable');
    const id=document.getElementById('attId').value;
    const student=document.getElementById('attStudent').value;
    const date=document.getElementById('attDate').value;
    const status=document.getElementById('attStatus').value;
    table.innerHTML+=`<tr>
    <td>${id}</td>
    <td>${student}</td>
    <td>${date}</td>
    <td>${status}</td>
    </tr>`;
    this.reset();
});


// add teacher
document.getElementById('teacherForm')?.addEventListener('submit',function(e){
    e.preventDefault();
    const table=document.getElementById('teacherTable');
    const id=document.getElementById('teacherId').value;
    const name=document.getElementById('teacherName').value;
    const subject=document.getElementById('teacherSubject').value;
    const email=document.getElementById('teacherEmail').value;
    table.innerHTML+=`<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${subject}</td>
    <td>${email}</td>
    </tr>`;
    this.reset();
});

// add class
document.getElementById('classForm')?.addEventListener('submit',function(e){
    e.preventDefault();
    const table=document.getElementById('classTable');
    const classId=document.getElementById('classId').value;
    const className=document.getElementById('className').value;
    const classTeacher=document.getElementById('classTeacher').value;
    table.innerHTML+=`<tr>
    <td>${classId}</td>
    <td>${className}</td>
    <td>${classTeacher}</td>
    </tr>`;
    this.reset();
});

// add grade
document.getElementById('gradeForm')?.addEventListener('submit',function(e){
    e.preventDefault();
    const table=document.getElementById('gradeTable');
    const id =document.getElementById('gradeId').value;
    const name=document.getElementById('gradeStudent').value;
    const subject=document.getElementById('gradeSubject').value;
    const grade=document.getElementById('gradeScore').value;
    table.innerHTML+=`<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${subject}</td>
    <td>${grade}</td>
    </tr>`;
    this.reset();
});
