import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Error = ({ message }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Text>{message}</Text>
    </Box>
  );
};

export default Error;
