import { splitIntoWords} from "./01";

test.skip('splitting into words should be correct', () => {
    //data
    const sentense1 = "Hello my friends!";
    const sentense2 = "Js - the best programming language.";
    //action
    const result1 =  splitIntoWords(sentense1);
    const result2 =  splitIntoWords(sentense2);

    //expect
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")

    expect(result2.length).toBe(6)
    expect(result2[0]).toBe("Js")
    expect(result2[1]).toBe("-")
    expect(result2[2]).toBe("the")
    expect(result2[3]).toBe("best")
    expect(result2[4]).toBe("programming")
    expect(result2[5]).toBe("language.")


})