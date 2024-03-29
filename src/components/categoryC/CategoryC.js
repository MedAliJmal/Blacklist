import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";

const slowcars = [
  {
    id: Math.random(),
    name: "Brioso 300 Widebody",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079176765890629703/brioso-300-widebody.png",
  },
  {
    id: Math.random(),
    name: "Fagaloa",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079176964495114290/fagaloa.png",
  },
  {
    id: Math.random(),
    name: "Issi Classic",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079177116052099112/issi-classic.png",
  },
  {
    id: Math.random(),
    name: "Dynasty",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079177252438298734/dynasty.png",
  },
  {
    id: Math.random(),
    name: "Asbo",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079177386555346984/asbo.png",
  },
  {
    id: Math.random(),
    name: "Warrener",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079177958075412540/latest.png",
  },
  {
    id: Math.random(),
    name: "Zion Classic",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079178274099445900/zion-classic.png",
  },
  {
    id: Math.random(),
    name: "Cheburek",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079178587023888514/cheburek.png",
  },
  {
    id: Math.random(),
    name: "Dilettante",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079179684383825990/latest.png",
  },
  {
    id: Math.random(),
    name: "Club",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079344100186271744/club.png",
  },
  {
    id: Math.random(),
    name: "Panto",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079344938245947442/panto.png",
  },
  {
    id: Math.random(),
    name: "Pigalle",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079346281320820736/pigalle.png",
  },
  {
    id: Math.random(),
    name: "Rhapsody",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079347358283862056/latest.png",
  },
  {
    id: Math.random(),
    name: "Glendale",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079347706381742100/latest.png",
  },
  {
    id: Math.random(),
    name: "Issi",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079347906827534386/latest.png",
  },
  {
    id: Math.random(),
    name: "Michelli GT",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079366237685035048/michelli-gt.png",
  },
  {
    id: Math.random(),
    name: "Weevil",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079366751080427600/weevil.png",
  },
  {
    id: Math.random(),
    name: "Blista",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079348574934024223/Dinka-Blista-Front-View.png",
  },
  {
    id: Math.random(),
    name: "Sentinel XS",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079349726798958612/latest.png",
  },
  {
    id: Math.random(),
    name: "Tailgater",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079350530498887750/latest.png",
  },
  {
    id: Math.random(),
    name: "Blista Classic",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079355229365092362/blista-compact.png",
  },
  {
    id: Math.random(),
    name: "Asea",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079356902984663080/asea.png",
  },
  {
    id: Math.random(),
    name: "Habanero",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079356014199058553/habanero.png",
  },
  {
    id: Math.random(),
    name: "Stratum",
    imgUrl:
      "https://cdn.discordapp.com/attachments/874040015779426315/1079356531461587005/stratum.png",
  },
];

const CategoryC = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [carsearch, setCarsearch] = useState("");
  const carlist = slowcars.filter((el) =>
    el.name.toUpperCase().trim().includes(carsearch.trim().toUpperCase())
  );
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        height: "150%",
        paddingBottom: "200px",
      }}
    >
      <h1 className="h1 h1spec">Class B race cars :</h1>
      <p className="parag">
        Cars that have approximately a top speed of 210 KM/H , a pretty good
        handling & an acceptable acceleration rate.
      </p>
      <Form style={{ width: "40%" }}>
        <Form.Group
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Enter your car name"
            value={carsearch}
            onChange={(e) => setCarsearch(e.target.value)}
          />
          <Form.Text className="text-muted">
            If your car doesn't appear ask for racers opinion about the car
            category.
          </Form.Text>
        </Form.Group>
      </Form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {carlist.map((el) => (
          <Card
            key={el.id}
            className="carcard"
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://cdn.discordapp.com/attachments/874040015779426315/1084100389709811722/image7.png"
          alt="ico san"
          style={{
            height: "40vh",
            width: "auto",
            border: "2px solid white",
            borderRadius: "15px",
          }}
        />
        <p
          className="reminder"
          style={{
            border: "2px white solid",
            borderRadius: "15px",
            backgroundColor: "black",

            color: "white",

            textAlign: "center",
          }}
        >
          Just a reminder : <br /> - Drive safely ! make sure to be fair in
          races and avoid pitting other players ! make it competitive but fair .{" "}
          <br />- Make sure you check the ranked races schedule and get enough
          fuel for it. GOOD LUCK
        </p>
      </div>
    </div>
  );
};

export default CategoryC;
