// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   CardText,
//   CardLink,
// } from "reactstrap";
import StatsWithLineChart from "@components/widgets/stats/StatsWithLineChart";
import Timeline from "@components/timeline";
import { Media } from "reactstrap";
// import Monitor from "";

const Home = () => {
  const data = [
    {
      orderNo: 22980,
      numeClient: "Marian Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "In Procesare",
      paymentStatus: "Avans de Achitat",
      deliveryEstimation: "Aug 19",
      comments: "Avans 10%",
      total: "11.730,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 22580,
      numeClient: "Elena Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "Confirmata",
      paymentStatus: "Neachitata",
      deliveryEstimation: "Aug 19",
      comments: "Deschidere noptiera de la stg la dreapta",
      total: "11.730,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 22570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "In curs de Livrare",
      paymentStatus: "Avans Achitat",
      deliveryEstimation: "Aug 19",
      comments: "Avans 15%",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "Retur",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "Retur",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "In Depozit",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "In Procesare la Furnizor",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "Livrare Confirmata Partial",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "Finalizata",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
    {
      orderNo: 12570,
      numeClient: "Cristina Petrescu",
      telefon: "0729448430",
      data: "Aug 02",
      status: "Anulata de Mobarta",
      paymentStatus: "Achitata Integral",
      deliveryEstimation: "Aug 19",
      comments: "Oglinda la dulap are un defect",
      total: "16.505,00 lei",
      montaj: "240,00 lei",
    },
  ];
  return (
    <div class="table-responsive container-fluid">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">COMANDA</th>
            <th scope="col">NUME CLIENT</th>
            <th scope="col">TELEFON</th>
            <th scope="col">DATA COM.</th>
            <th scope="col">STATUS COMANDA</th>
            <th scope="col">STATUS PLATA</th>
            <th scope="col">Per. LIVR.</th>
            <th scope="col">Comentarii Mobarta</th>
            <th scope="col">TOTAL</th>
            <th scope="col">MONTAJ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => {
            console.log("order", order);
            return (
              <tr>
                <th scope="row">{order.orderNo}</th>
                <td>{order.numeClient}</td>
                <td>{order.telefon}</td>
                <td>{order.data}</td>
                <td>{order.status}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.deliveryEstimation}</td>
                <td>{order.comments}</td>
                <td>{order.total}</td>
                <td>{order.montaj}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
