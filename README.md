# Notes
General definition of design patterns:
- effective solutions to common application-development challenges 
- not the "Gang of Four" patterns 

**Layout Components:**

In a nutshell, separate layout from content

**Container Components:**

Let the container load the data (axios) and pass it to child components. Or, "Our components shouldn't know where their data is coming from."

**Uncontrolled Components**

Components track their own state and release data on events (e.g. form, check values in inputs only when user presses button)

**Controlled Components**

Components that do not keep track of their own state--all states pass in as props (using useState)

Generally, we prefer controlled components => more reusable/testable

**Higher-order components**

Components that return another component instead of JSX ==> the other component returns JSX.

Used to share complex behaviour between multiple components.

Add extra functionality to existing components.

**Custom Hooks**

Special hooks that usually combine functionality of one or more existing "useState" or "useEffect" hooks. 

n.b. hooks have to start with "use<Hookname>"

Custom Hooks have a major downside, they reduce component re-usability, hence the need for HOCs, container components, and so on.

**Functional Programming (In React)**

Stuff we've seen:

- Controlled components
- Components in React are functions (nowadays)
- Higher-order components (passing and returning components is very functional)

To come:

- Recursive components
- Partially applied components
- Component composition

