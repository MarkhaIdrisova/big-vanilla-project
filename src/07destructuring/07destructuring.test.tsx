import exp from "node:constants";

test("", () => {
    let props = {
        name: "Markha",
        age: 29,
        lessons: [{title: "1"}, {title: "2"}]
    }
    const age = props.age
    const lessons = props.lessons

    expect(age).toBe(29);
    expect(lessons.length).toBe(2)
})