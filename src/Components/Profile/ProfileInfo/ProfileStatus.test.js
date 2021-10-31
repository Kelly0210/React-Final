import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus profileStatus="Status for test" />);
        const instance = component.getInstance();
        expect(instance.state.profileStatus).toBe("Status for test");
    });

    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus profileStatus="Status for test"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Status for test");
    });

    test("after creation span with status should be displayed", () => {
        const component = create(<ProfileStatus />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation input should't be displayed", () => {
        const component = create(<ProfileStatus />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });

    test("input should be displayed instead of span", () => {
        const component = create(<ProfileStatus profileStatus="Status for test"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Status for test");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

})

// describe("Button component", () => {
//     test("Matches the snapshot", () => { <<<---- COOL CONCEPTIONS
//         const button = create(<Button />);
//         expect(button.toJSON()).toMatchSnapshot();
//     })
// })