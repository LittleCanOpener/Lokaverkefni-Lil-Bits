import React from "react";
import { TEInput } from "tw-elements-react";

export default function FindOrder() {
    return (
        <>
            <h1>FindOrder</h1>
            <div className="border-solid border-2 border-black">
                <TEInput
                    className=""
                    type="email"
                    id="exampleFormControlInputEmail"
                    placeholder="Example@Email.com"
                ></TEInput>
            </div>
        </>
    );
}