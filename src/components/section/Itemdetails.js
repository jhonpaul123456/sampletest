import React from "react";
import styles from "./Itemdetails.module.css";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Itemdetails = () => {
  const [datas, setDatas] = useState({});
  useEffect(() => {
    axios.get(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    ).then(res => {
      setDatas(res.data)
      console.log(res)
    })
    .catch(err => console.log(err))
  }, []);

  const imagecopy = require("./classic-tee.jpg");

  const displaySize = (button) => {
    var displaysizelabel = document.getElementById("displaysizelabel");
    const buttons = document.querySelectorAll("#btnval");

    buttons.map(btn => {
      btn.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
      })
    })

  }
  return (
    <section className={styles.detailswrapper} key={datas.id}>
     
    <div className={styles.imagewrapper}>
      <img src={imagecopy} alt="item cimage" />
    </div>

    <div class={styles.itemdetails}>
     
      <h2>{datas.title}</h2>

      <div className={styles.pricewrapper}>
        <h4>${datas.price}.00</h4>
      </div>

      <p className={styles.description}>
      {datas.description}
      </p>

      <div className={styles.sizeOptions}>
        <p>
          SIZE<i>*</i> <span id="displaysizelabel"></span>
        </p>
        <div className={styles.sizes}>
        {/* {datas.sizeOptions.map(size => (
               <div className={styles.sizeItems} key={size.id}>
               <button key={size.id} id="btnval" onClick={displaySize} value={size.label}>{size.label}</button>
             </div>
        ))} */}

            <div className={styles.sizeItems}>
               <button id="btnval" onClick={displaySize} value="m">m</button>
             </div>
             <div className={styles.sizeItems}>
               <button id="btnval" onClick={displaySize} value="s">s</button>
             </div>
             <div className={styles.sizeItems}>
               <button id="btnval" onClick={displaySize} value="d">d</button>
             </div>
        
        </div>
      </div>

      <button className={styles.addtoCartBtn}>
        <h6>ADD TO CART</h6>
      </button>
    </div>
  </section>
  );
};
