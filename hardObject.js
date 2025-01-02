const university = {
    name: "Stamford University",
    location: {
        country: "Palastine",
        state:"GAZA",
        city: "Gaza jabaliya",
        address: {
            streat: "123 innovation Drive",
            rip: "223344"
        }
    },
    department: [
        {
            name: "Computer Science",
            head: "Dr. Alan Truing",
            course: [
                { code: "CS101", title: "Intro to Programming", credits: 4 },
                { code: "CS201", title: "Data Structures", credits: 3 },
                { code: "CS301", title: "Artificial Intelligence", credits: 4 }                
            ]
        },
        {
            name: "Mechanical Engineering",
            head: "Dr. Nikola Tesla",
            course: [
                { code: "ME101", title: "Thermodynamics", credits: 3 },
                { code: "ME201", title: "Fluid Mechanics", credits: 4 },
                { code: "ME301", title: "Robotics", credits: 3 }
            ]
        }
    ],
    totalStudents: 5000,
    established:1800,
    getUniversityAge: function() {
        return new Data().getFullYear() = this.established;
    },
    addStudent: function(departmentName, studentName) {
        const department = this.department.find(
                (dept) => dept.name == departmentName
            );
        if(department) {
            if(!department.students) {
                department.students = [];
            }
            department.students.push(studentName);
        } else {
            console.log("department not found!");
        }
    },
    listDepartments: function() {
        return this.departments.map((dept) => dept.name);
    }
}

console.log(university.listDepartments);