"use client";
import { Title, Flex, Button, Textarea } from "@mantine/core";

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
