test.skip("should take old mrn older than 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test.skip("should take courses chipper 160", () => {
    const courses = [
        {title: "css", price: 110},
        {title: "js", price: 200},
        {title: "React", price: 150}
    ];

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("css");
    expect(cheapCourses[1].title).toBe("React")
})


test.skip("get only completed tasks",()=>{
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Soda", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ];

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})
test.skip("get only uncompleted tasks",()=>{
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Soda", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ];

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})
