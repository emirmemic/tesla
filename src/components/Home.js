import React from "react";
import styled from "styled-components";
import Section from "./Section";
import img2 from "../assets/images/model-s.jpg";
import img3 from "../assets/images/model-y.jpg";
import img4 from "../assets/images/model-3.jpg";
import img5 from "../assets/images/model-x.jpg";
import img6 from "../assets/images/solar-panel.jpg";
import img7 from "../assets/images/solar-roof.jpg";
import img8 from "../assets/images/accessories.jpg";

function Home() {
  return (
    <Container>
      <Section
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundImg={img2}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={img3}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={img4}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={img5}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={img6}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={img7}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={img8}
        leftBtnText="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
