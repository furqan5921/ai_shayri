import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Response = ({ response }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      height={"100%"}
      alignItems={"center"}
    >
      <Text w={"70%"} textAlign={"center"}>
        {response}
      </Text>
    </Box>
  );
};

export default Response;
