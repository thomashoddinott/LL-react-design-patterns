import { RegularList } from "./RegularList";
import { LargePersonListItem } from "./LargePersonListItem";
import { SmallPersonListItem } from "./SmallPersonListItem";
import { Modal } from "./Modal";
import { SplitScreen } from "./SplitScreen";

const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      <Modal>
        {/* <LargePersonListItem person={people[0]}/> */}
        <SplitScreen>
          <h1>Left</h1>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={SmallPersonListItem}
          />
        </SplitScreen>
      </Modal>
    </>
  );
}

export default App;
