import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <Container>PropertyDetail { productId }</Container>;
}

export default withLayoutBasic(PropertyDetail);