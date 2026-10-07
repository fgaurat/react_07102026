// UpperCamelCase
// camelCase
// kebab-case

import Title from "./Title";

interface HelloProps {
  firstName: string;
  name: string;
  showTitle: boolean;
}

function Hello({ firstName, name, showTitle }: HelloProps) {
  const theTitles = (
    <>
      <Title value={firstName} />
      <Title value={name} />
    </>
  );

  return (
    <>
      Hello
      <strong>{firstName}</strong>
      <strong>{name}</strong>
      <hr />
      {showTitle ? theTitles : <p>Pas de titles</p>}
      <hr />
      {showTitle && theTitles}
    </>
  );
}

function Hello1({ firstName, name, showTitle }: HelloProps) {
  let theTitles = <p>Pas de titles</p>;
  if (showTitle) {
    theTitles = (
      <>
        <Title value={firstName} />
        <Title value={name} />
      </>
    );
  }

  return (
    <>
      Hello
      <strong>{firstName}</strong>
      <strong>{name}</strong>
      {theTitles}
    </>
  );
}

export default Hello;
