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
            <h2 className="text-2xl mb-2">
              Talk About React useRef() hooks
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
             src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qj17HL0m--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/emdosd9tj8bfly5is35y.png"
              alt="blog-tile"
              className="rounded "
            />
          </div>
          <div className="blog-body mt-2 ">
            <h2 className="text-2xl mb-2">
              How does works react Context API?
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
        
      </div>
    </section>
  );
};

export default Blogs;
