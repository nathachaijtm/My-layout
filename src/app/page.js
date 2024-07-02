import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
<div className="container-">
  <div className="row text-center">
    <div className="co-md-12 bg-danger p-5">
      Navbar
    </div>
  </div>
  <div className="row text-center">
    <div className="col-md-12 bg-primary p-5">
      Header
    </div>
  </div>


  <div className="row text-center">
    <div className="col-md-3 bg-info p-5">
      Card1
    </div>
    <div className="col-md-3 bg-secondary p-5">
      Card2
    </div>
    <div className="col-md-3 bg-success p-5">
      Card3
    </div>
  </div>


  <div className="row text-center">
    <div className="col-md-12 bg-warning p-5">
      Header
    </div>
  </div>
</div>



  
    </>
  );
}
