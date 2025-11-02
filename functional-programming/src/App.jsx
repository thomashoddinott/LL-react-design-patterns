import { Card, CardBody, CardFooter, CardHeader } from "../Composition";

function App() {
  return (
    <>
      <Card>
        <CardHeader title="Card 1" />
        <CardBody>
          <p>This is the card content</p>
        </CardBody>
        <CardFooter>
          <p>A footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <p>This is the card content</p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader title="Card 2" />
        <CardBody>
          <p>This is the card content</p>
        </CardBody>
        <CardFooter>
          <p>A footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <p>This is the card content</p>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
