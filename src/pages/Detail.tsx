import { useParams } from "react-router";
import { PageLayout } from "../shared/services/api/layout/page-layout/PageLayout";

export const Detail = () => {
  const { id } = useParams();
  return <PageLayout title="Detalhes">Detail {id}</PageLayout>;
};
