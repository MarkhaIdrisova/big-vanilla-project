import {createGreetingMessage, ManType} from "./05_01";
import exp from "node:constants";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test.skip("should get array of greeting messages", () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT!")
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT!")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT!")
})