import screenshot from '../assets/screenshot.png';
import {Flex} from "@mantine/core";

const About = () => {
  return (
    <Flex direction={{ base: "column-reverse", sm: "row" }} justify="center" align="center">

      <div>
        <h1>Modulo</h1>
        <h3>Smart Ways to use the Remainder of your time.</h3>
        <p>Modulo helps you make the most of your free time. By analyzing open slots in your calendar, Modulo uses AI to suggest meaningful and personalized activities based on your interests. Whether it’s a quick workout, a creative break, or time to learn something new, Modulo turns your remainder into rewarding moments.</p>
      </div>

      <div>
        <img src={screenshot} alt="Screenshot" width="400"/>
      </div>

    </Flex>
  );
};


export default About;