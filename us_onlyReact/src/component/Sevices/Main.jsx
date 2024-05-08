import * as React from "react";
import Img1 from "./photos/ph2.png";
import Img2 from "./photos/ph1.png";
import Img3 from "./photos/ph3.png";
import Img4 from "./photos/ph4.png";
import Img5 from "./photos/ph5.png";
import Img6 from "./photos/ph6.png";

function Main() {
  return (
    <>
      <div style={{ margin: "0 auto", width: "91.4%" }}>
        <div style={{ marginTop: "4rem", marginRight: "5%", display: "flex", flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
          <div style={{ width: "55%" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h2 style={{ marginBottom: "1rem" }}>Dent & Paint</h2>
                <p style={{ fontSize: "1rem" }}>
                  Dent and paint car service provides expert solutions for restoring
                  vehicle's exterior, using advanced techniques and top-quality
                  materials to enhance appearance and durability.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <img src={Img1} alt="img" style={{ width: "100%", height: "auto",borderRadius:"7px" }} />
          </div>
        </div>
      </div>
      

      <div style={{ margin: "0 auto", width: "91.4%" }}>
        <div style={{ marginTop: "4rem", marginRight: "5%", display: "flex", flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
        <div style={{ width: "30%" }}>
            <img src={Img2} alt="img" style={{ width: 420, height:220 ,borderRadius:"7px"}} />
          </div>
          <div style={{ width: "55%" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h2 style={{ marginBottom: "1rem" }}>Diagnostics</h2>
                <p style={{ fontSize: "1rem" }}>
                Car diagnostic services use advanced technology to identify
              vehicle issues accurately by connecting diagnostic tools to the
              onboard computer. This process helps diagnose engine and
              electrical problems for efficient and safe repairs.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      

      <div style={{ margin: "0 auto", width: "91.4%" }}>
        <div style={{ marginTop: "4rem", marginRight: "5%", display: "flex", flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
          <div style={{ width: "55%" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h2 style={{ marginBottom: "1rem" }}>Oil/Lube/filters</h2>
                <p style={{ fontSize: "1rem" }}>
                Oil/lube/filter services by expert technicians ensure engine
              health by replacing old oil, lubricating components, and
              installing fresh filters, promoting smooth operation and reducing
              repair costs.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <img src={Img3} alt="img" style={{ width: 360, height: 220,borderRadius:"7px"}} />
          </div>
        </div>
      </div>
      
      
      <div style={{ margin: "0 auto", width: "91.4%" }}>
        <div style={{ marginTop: "4rem", marginRight: "5%", display: "flex", flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
        <div style={{ width: "30%" }}>
            <img src={Img4} alt="img" style={{ width: 420, height:220 ,borderRadius:"7px"}} />
          </div>
          <div style={{ width: "55%" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h2 style={{ marginBottom: "1rem" }}> Brakes</h2>
                <p style={{ fontSize: "1rem" }}>
                Brake services by expert technicians ensure safe vehicle stops by
              inspecting, repairing, and replacing components, using quality
              parts, and enhancing driving safety.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div style={{ margin: "0 auto", width: "91.4%" }}>
        <div style={{ marginTop: "4rem", marginRight: "5%", display: "flex", flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
          <div style={{ width: "55%" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h2 style={{ marginBottom: "1rem" }}>Suspension</h2>
                <p style={{ fontSize: "1rem" }}>
                Suspension car services involve expert technicians diagnosing and
              repairing issues related to your vehicle's suspension system,
              including shocks, struts, and springs, to ensure smooth,
              comfortable, and safe driving.
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <img src={Img5} alt="img" style={{ width: 360, height: 220,borderRadius:"7px"}} />
          </div>
        </div>
      </div>
      
      <div style={{ margin: "0 auto", width: "91.4%" }}>
        <div style={{ marginTop: "4rem", marginRight: "5%", display: "flex", flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
        <div style={{ width: "30%" }}>
            <img src={Img6} alt="img" style={{ width: 420, height:220 ,borderRadius:"7px"}} />
          </div>
          <div style={{ width: "55%" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
              <div>
                <h2 style={{ marginBottom: "1rem" }}>Detailing</h2>
                <p style={{ fontSize: "1rem" }}>
                Detailing car service involves skilled professionals meticulously
              cleaning, polishing, and protecting every surface of your vehicle,
              restoring its interior and exterior to a pristine condition.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Main;
