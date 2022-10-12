import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="blog my-10">
        <p className="text-xl font-bold text-blue-300">
          What is the purpose of react router?
        </p>
        <p className="text-slate-400 mt-3">
          React Router, and dynamic, client-side routing, allows us to build a
          single-page web application with navigation without the page
          refreshing as the user navigates. React Router uses component
          structure to call components, which display the appropriate
          information. By preventing a page refresh, and using Router or Link,
          which is explained in more depth below, the flash of a white screen or
          blank page is prevented. This is one increasingly common way of having
          a more seamless user experience. React router also allows the user to
          utilize browser functionality like the back button and the refresh
          page while maintaining the correct view of the application.
        </p>
      </div>
      <div className="blog my-10">
        <p className="text-xl font-bold text-blue-300">How does context api works?</p>
        <p className="text-slate-400 mt-3">
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state
        </p>
      </div>
      <div className="blog my-10">
        <p className="text-xl font-bold text-blue-300">What is useref?</p>
        <p className="text-slate-400 mt-3">
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue). The returned object
          will persist for the full lifetime of the component.Essentially,
          useRef is like a “box” that can hold a mutable value in its .current
          property. we should Keep in mind that useRef doesn’t notify us when its content
          changes. Mutating the .current property doesn’t cause a re-render. If
          we want to run some code when React attaches or detaches a ref to a
          DOM node, we may want to use a callback ref instead.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
