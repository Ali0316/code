function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        let nearestnum = grade;
        
    while (nearestnum % 5 !== 0) {++nearestnum};
        
    return grade < 38 || (nearestnum - grade) >= 3 ? grade : nearestnum
  })
}