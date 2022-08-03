import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  text: string;
  imageLocation?: string;
  active: boolean;
  onClick: () => void;
};

function GradientButton({ text, imageLocation, active, onClick }: Props) {
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      maxH={["4.5rem"]}
      flexGrow={[1, 1, 1, 0]}
      sx={{
        background: active
          ? "linear-gradient(97.77deg, #00B2FF -2.3%, #579AFF 29.87%, #D93FFF 57.73%, #FC4236 84.99%, #FFF500 113.99%)"
          : "brand.grey-60",
        padding: active ? "2px" : "1px",
        WebkitMarginInlineStart: "0",
      }}
    >
      <HStack
        background="brand.white"
        justifyContent="center"
        alignItems="center"
        px={[4, 4, 9]}
        minH="100%"
        marginInlineStart={0}
      >
        {imageLocation && (
          <Image
            src={imageLocation}
            width={["2rem", "2rem", "3.2rem", "3.2rem"]}
            alt="button-image"
          />
        )}
        <Text fontSize="2xl" color={active ? "brand.black" : "brand.grey-60"} fontWeight={400}>
          {text}
        </Text>
      </HStack>
    </Box>
  );
}

export default GradientButton;
