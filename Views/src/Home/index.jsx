import { useEffect, useState } from "react";
import './../Home.css'
import Portfolio from "../components/portfolio";
import Header from "../components/header";
import A_propos from "../components/A_Propos";
import Counts from "../components/counts";
import Services from "../components/Services";
import Cta from "../components/Cta";
import Partenaires from "../components/Partenaires";
import Incubateurs from "../components/Incubateur";
import Parcousr_Selection from "../components/Parcours_selection";
import Team from "../components/Team";
import Contacts from "../components/Contacts";
import Entreprenariat from "../components/Entreprenariat";
import Footer from "../components/footer";
import { getRequest, hostUrl } from "../utils/Request_Http/Resquest";


function Home() {
  const [dataIncub, setDataIncub] = useState([]);
  const [dataCeo, setDataCeo] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const responseIncub = await getRequest(`${hostUrl}/utilisateur/all`);
      setDataIncub(responseIncub);
      const reponseCeo = await getRequest(`${hostUrl}/startUp/all`);
      setDataCeo(reponseCeo)
    }
    getdata();
  }, [])

  return (
    <>
      <Portfolio />
      <Header />
      <A_propos />
      <Counts />
      <Services />
      <Cta />
      <Incubateurs data={dataIncub} />
      <Partenaires />
      <Entreprenariat data={dataCeo} />
      <Parcousr_Selection />
      <Team />
      <Contacts />
      <Footer />

    </>


  );
}
export default Home;