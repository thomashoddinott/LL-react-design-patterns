import { RegularList } from "./RegularList";
import { LargePersonListItem } from "./LargePersonListItem";
import { SmallPersonListItem } from "./SmallPersonListItem";
import { Modal } from "./Modal";
import { SplitScreen } from "./SplitScreen";
import { people } from "./data";

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={5}>
        <>
          <h1>Left</h1>
          <RegularList
            items={people}
            resourceName="person"
            itemComponent={LargePersonListItem}
          />
        </>
        <div style={{ paddingTop: 20 }}>
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
        </div>
      </SplitScreen>
    </>
  );
}

export default App;
