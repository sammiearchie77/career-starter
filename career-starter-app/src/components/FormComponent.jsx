import { Link } from "react-router-dom";

export default function FormComponent(
    { 
        formTitle, 
        firstInput, 
        secondInput, 
        messageInput,
        buttonText
    }
) {
  return (
    <div className="mb-3">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              { formTitle }
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor={firstInput} className="block text-sm font-medium leading-6 text-gray-900">
                  { firstInput }
                </label>
                <div className="mt-2">
                  <input
                    id={firstInput}
                    name={firstInput}
                    type={firstInput}
                    autoComplete={firstInput}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="">
                  <label htmlFor={secondInput} className="block text-sm font-medium leading-6 text-gray-900">
                {secondInput}                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id={secondInput}
                    name={secondInput}
                    type={secondInput}
                    autoComplete={secondInput}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="">
                  <label htmlFor={messageInput} className="block text-sm font-medium leading-6 text-gray-900">
                {messageInput}                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id={messageInput}
                    name={messageInput}
                    type={messageInput}
                    autoComplete={messageInput}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  { buttonText }
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
