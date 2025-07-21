import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const device = useDeviceDetect();
    
  if(device === "mobile"){
    return <Stack>PropertyDetail mobile</Stack>;
  }else{
    return <Container>PropertyDetail { productId }</Container>;
  }
}

export default withLayoutBasic(PropertyDetail);