import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ReceiptItemLiest from "@/components/organisms/ReceiptItemList/ReceiptItemLiest";
import { ReceiptFetched, ReceiptResponse } from "@/models/ReceiptsFetched";
import { Container, Main, Title } from "@/components/sharedstyles";

interface VehiclePageProps {
   receiptss: ReceiptFetched[];
   params: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
   const vehicleSlugs = ["clhvmqzdk0006mj08ftyjig9s", "clhvmqzcj0002mj081no5h0m0", "clhvmqzd20004mj08fqaccv59"];

   const paths = vehicleSlugs.map((slug) => ({ params: { vehicle: slug } }));

   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps<VehiclePageProps> = async ({ params }) => {
   const vehicle = params?.vehicle?.toString();
   const response = await fetch(`https://tangro-demo-api.vercel.app/api/vehicles/${vehicle}/receipts`, {
      headers: {
         Authorization: `Bearer ${process.env.RECEIPTS_API_KEY}`,
      },
   });
   const vehiclesResponse: ReceiptResponse = await response.json();
   return {
      props: { receiptss: vehiclesResponse },
      revalidate: 5 * 60,
   };
};

const VehiclePage = ({ receiptss }: VehiclePageProps) => {
   const router = useRouter();
   const vehicleName = router.query.vehicle?.toString();

   const title = "Vehicle: " + vehicleName;
   console.log(receiptss);

   return (
      <Container>
         <Head>
            <title key="title">{`${title} - NextJS News App`}</title>
         </Head>
         <Main>
            <Title>{title}</Title>

            <ReceiptItemLiest receipeets={receiptss} />
         </Main>
      </Container>
   );
};

export default VehiclePage;
