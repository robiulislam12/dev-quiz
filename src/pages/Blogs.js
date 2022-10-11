import React from "react";

const Blogs = () => {
  return (
    <section className="blogs-container container mx-auto padding py-10">
      <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="blog bg-white rounded-lg shadow p-3">
          <div className="blog-image">
            <img
              src="https://miro.medium.com/max/720/1*sX8rBJBol5dBp5WIJQrYyw.png"
              alt="blog-tile"
              className="rounded"
            />
          </div>
          <div className="blog-body mt-2 ">
            <h2 className="text-2xl mb-2">
              What is the purpose of react router?
            </h2>
            <p className="text-gray-500">
              <i>
                " React Router is a standard library for routing in React. It
                enables the navigation among views of various components in a
                React Application, allows changing the browser URL, and keeps
                the UI in sync with the URL"
              </i>
            </p>
            <br />
            <p>
              we are use react-router-dom for navigate our web Application. We
              create Single page application, so we need a navigate system that
              will provide page not loading system. React router works like
              that. We are use it, no loading page.
            </p>
            <br />
            <p>
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information.
            </p>
            <br />
            <p>
              By preventing a page refresh, and using Router or Link, which is
              explained in more depth below, the flash of a white screen or
              blank page is prevented. This is one increasingly common way of
              having a more seamless user experience. React router also allows
              the user to utilize browser functionality like the back button and
              the refresh page while maintaining the correct view of the
              application.
            </p>
          </div>
        </div>
        <div className="blog bg-white rounded-lg shadow p-3">
          <div className="blog-image">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s---TllpLY3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qnwi8ehe64zysba5y195.png"
              alt="blog-tile"
              className="rounded"
            />
          </div>
          <div className="blog-body mt-2 ">
            <h2 className="text-2xl mb-2">Talk About React useRef() hooks</h2>
            <p className="text-gray-500">
              <i>
                " React's useRef hook, short for reference, allows us to persist
                data across renders without causing the component to rerender. A
                typical use case for this hook would be to store a DOM element,
                which we can use to access it programmatically"
              </i>
            </p>
            <br />
            <p>
              The useRef hook is less common despite its interesting
              characteristics and because without it we would not be able to
              implement certain functionalities . Therefore, I want to tell you
              about its operation and its most interesting use cases
            </p>
            <br />
            <p>
              The useRef hook has its origin in the createRef method that is
              used in class components and that allowed to create a “reference”
              (forgive redundancy) to a DOM element created during rendering.
            </p>
            <br />
            <p>
              This part is important. In React, the most common thing when we
              want to modify an element of the DOM is to force a new render by
              means of a change in the state, that is, we delegate the
              generation of the DOM to React, which will build the tree based on
              the properties passed to the elements. We can see it as a case of
              declarative programming.
            </p>
          </div>
        </div>
        <div className="blog bg-white rounded-lg shadow p-3">
          <div className="blog-image">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qj17HL0m--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/emdosd9tj8bfly5is35y.png"
              alt="blog-tile"
              className="rounded "
            />
          </div>
          <div className="blog-body mt-2 ">
            <h2 className="text-2xl mb-2">How does works react Context API?</h2>
            <p className="text-gray-500">
              <i>
                " The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on."
              </i>
            </p>
            <br />
            <p>
              Old react have a props drilling system, but react when comes
              functional component, they understand that this is not way.
              Suppose, you have many components such as grandpa, parent,myself,
              brothers and sister. If you need something that only need sisters
              sons, so you need pass gandpa then parent, then sister, then reach
              sister son. it's very bad way, so react Context API solve this
              problem
            </p>
            <br />
            <p>
              React context api store our state, which state our another
              components. So, if our need that state, we will call this state
              and restore a variable this value.
            </p>
            <br />
            <p>
              React context api basically use for login, auth etc purpose or
              e-commerce cart store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
