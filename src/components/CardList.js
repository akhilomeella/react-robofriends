import Card from "./Card";

const CardList = (props) => {
  const { robot } = props;

  // or use destructure:
  // const CardList = ({robot}) => {}

  
  return (
    <>
      {/* <Card id={robot[0].id} name={robot[0].name} email={robot[0].email}/>
     <Card id={robot[1].id} name={robot[1].name} email={robot[1].email}/>
     <Card id={robot[2].id} name={robot[2].name} email={robot[2].email}/>
     <Card id={robot[3].id} name={robot[3].name} email={robot[3].email}/> */}

      {
robot.map((user, i) => {
    return (
      <Card
        key={i}
        id={robot[i].id}
        name={robot[i].name}
        email={robot[i].email}
      />
    );
    })
      }
    </>
  );
};

export default CardList;
