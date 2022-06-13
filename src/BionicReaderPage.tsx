import React, {useState} from "react";
import { textVide } from "./tv";

const BionicReaderPage = () => {

    const [input, setInput] = useState("");

    return (
  
  <div className="px-3 py-20 w-screen h-screen bg-gray-500">
    <div className="mx-auto max-w-xs h-auto min-h-fit sm:max-w-lg md:max-w-4xl rounded-lg shadow bg-white p-4">
      <h2 className="text-2xl font-bold my-2 text-left">Bionic Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="text-left py-4">
          <h3 className="text-lg font-bold pb-4">Insert Text:</h3>
          <textarea
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg shadow
            transition
            ease-in-out
            m-0
            mb-4
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="text"
            id="controlTextarea"
            cols={30}
            rows={10}
            aria-label="empty textarea"
            placeholder="Empty"
            onChange={e=>setInput(e.target.value)}
          ></textarea>
     
        </section>
        <section className="text-left py-4 overflow-hidden">
          <h3 className="text-lg font-bold pb-4">Read Section:</h3>
          <p className="whitespace-pre-wrap break-all">
          <span className="t-text" dangerouslySetInnerHTML={{ __html: textVide(input) }} />
          </p>
        </section>
      </div>
    </div>
  </div>
);
}

export default BionicReaderPage