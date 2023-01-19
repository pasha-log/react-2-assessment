### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

*The React Router allows us to create client-side routing, which can create single-page applications without having to set up a complicated/expensive backend, which would be overkill for certain apps. React Router allows client-side routing which handles mapping between URL bar and page user sees via browser rather than via server.*

- What is a single page application?

*Sites that exclusively use client-side routing are single-page applications.*

- What are some differences between client side and server side routing?

*Client side routing is a bit faster for setting up different "pages", but lets the app still be considered as a single page application. Server side routing may involve a connection with a database, and is more backend oriented. Server-side routing handles more complicated CRUD actions.*

- What are two ways of handling redirects with React Router? When would you use each?

*You can either use the Redirect component or the history object. The redirect kind is used for redirecting user when they've entered an invalid URL. The history object is typically used when user is redirected after a form submission.*

- What are two different ways to handle page-not-found user experiences using React Router? 

*One way is to simply add another Route component but with another component instead of an exact path, which will become a catch-all. Note that all other routes would have an "exact path". But my preferred way is to create a Redirect component with "to='/'" to specify which route I want the user to be redirected to in the case of an invalid type of url.*

- How do you grab URL parameters from within a component using React Router?

*The useParams hook stores info on the URL parameters. It returns an object which can then be used within components logic.*

- What is context in React? When would you use it?

*Context is used when there is universal data needed across your application. Data becomes accessible across all components. It's useful because of prop drilling / tunneling, less repetition, global themes, and shared data.*

- Describe some differences between class-based components and function
  components in React.

*Class-based components involves more code to write. Instead of simply returning, you also have to include **render()**. With class components we don’t use hooks. Instead, state is initialized in the constructor. With class components, state is changed with the instance method setState. This works similarly to the function returned from useState. Instead of writing our event handlers as inline arrow functions, we can also write them as instance methods. React also provides other methods you can use to run code at other points before or after rendering.These methods make up what’s known as the component lifecycle.*

- What are some of the problems that hooks were designed to solve?

*Problems like repeating code and logic in the lifecycle of a component. Sharing logic among components was a challenge as well.*