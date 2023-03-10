import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

const driftcars = [
  {
    id: Math.random(),
    name: "ZR350",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079091463910076466/zr350.png",
  },
  {
    id: Math.random(),
    name: "Futo GTX",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079091630210031726/futo-gtx.png",
  },
  {
    id: Math.random(),
    name: "WarrenerHKR",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079092569423753257/e0a9dd3927a6da53edf9b48737f4cb0a.png",
  },
  {
    id: Math.random(),
    name: "Penumbra",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079092830120718438/penumbra.png",
  },
  {
    id: Math.random(),
    name: "Drift Tampa",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079093108362444960/tampa-drift.png",
  },
  {
    id: Math.random(),
    name: "Yosemeite Drift",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079093293566144613/drift-yosemite.png",
  },
  {
    id: Math.random(),
    name: "Gauntlet Hellfire",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079093523690836068/gauntlet-hellfire.png",
  },
  {
    id: Math.random(),
    name: "Z190",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079093673754644691/190z.png",
  },
  {
    id: Math.random(),
    name: "Nebula",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079093849714069584/nebula-turbo.png",
  },
  {
    id: Math.random(),
    name: "Zion",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079352684722802688/zion.png",
  },
];

const DriftCar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        height: "150%",
        paddingBottom: "200px",
      }}
    >
      <h1 className="h1 h1spec">Drift Cars :</h1>
      <p className="parag">
        You can get your drift car only if you have a good reputation with the
        blacklist!
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {driftcars.map((el) => (
          <Card
            className="carcard"
            key={el.id}
            style={{
              backgroundImage:
                "url(https://www.teahub.io/photos/full/110-1106101_racing-cars-wallpapers-4k-hd.jpg)",
              backgroundSize: "100%",
              boxShadow: "8px 8px 8px 8px black",
              margin: "20px",
            }}
          >
            <Card.Img variant="top" src={el.imgUrl} />
            <Card.Body>
              <Card.Title className="card-tit" style={{ color: "white" }}>
                {el.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DriftCar;
