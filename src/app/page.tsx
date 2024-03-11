"use client";
import { Title, Flex, Button, Textarea, Text } from "@mantine/core";

import North from "@mui/icons-material/North";
import South from "@mui/icons-material/South";
import { useState } from "react";

export default function Home() {
  const [makingSense, setMakingSense] = useState(false);
  const [sense, setSense] = useState("");
  const [nonsense, setNonsense] = useState("");

  const handleSwap = () => setMakingSense((makingSense) => !makingSense);

  const handleKeenanicalize = async () => {
    const action = makingSense ? "dekennanicalize" : "kennanicalize";
    const text = makingSense ? nonsense : sense;
    if (text) {
      const result = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ action, text }),
      });
      switch (makingSense) {
        case true:
          setSense(await result.text());
          break;
        case false:
          setNonsense(await result.text());
          break;
      }
    }
  };
  return (
    <main>
      <Flex direction="column" justify="center" align={"center"}>
        <Title>Keenanical</Title>
        <Title style={{ fontStyle: "italic" }}>(kee-nan-i-kal)</Title>
        <Text style={{ width: "40vw", marginTop: "15px" }}>
          Are you tired of not understanding that coworker that is the
          incarnation of a dictionary?{" "}
        </Text>
        <Text style={{ width: "40vw", marginTop: "15px" }}>
          Are fancy words getting in the way of your daily workflow?
        </Text>
        <Text style={{ width: "40vw", marginTop: "15px" }}>
          Look no further... introducing Keenanical, an AI powered defancy-fier
          and fancy-fier to ease communications with &quot;Those who find
          themselves compelled to articulate in ornate and grandiloquent
          verbiage sans necessity.&quot;
        </Text>
        <Flex
          justify="center"
          align="center"
          style={{ margin: "20px calc(100vw/4)", minWidth: "calc(100vw/2)" }}
          direction="column"
          flex={1}
        >
          <Textarea
            cols={60}
            minRows={3}
            maxRows={5}
            autosize
            placeholder="Plain english goes here..."
            value={sense}
            onChange={(e) => setSense(e.target.value)}
          />
          <Flex style={{ margin: "20px" }}>
            <Button onClick={handleKeenanicalize}>
              {makingSense ? "Un k" : "K"}eenanicalize
            </Button>
            &nbsp;
            <Button onClick={handleSwap}>
              {makingSense ? <North /> : <South />}
            </Button>
          </Flex>
          <Textarea
            cols={60}
            minRows={3}
            maxRows={5}
            autosize
            placeholder="Place nonsense here..."
            value={nonsense}
            onChange={(e) => setNonsense(e.target.value)}
          />
        </Flex>
      </Flex>
    </main>
  );
}
