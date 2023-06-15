/* eslint-disable */
import React, { useEffect } from "react";
import hello from "./../imgs/hello.svg";
import HeaderNav from "./../component/HeaderNav";
import LecCard from "./../component/LecCard";
import Footer from "../component/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMPLD } from "../store";


function MainPage() {

  /* let userID_test = localStorage.getItem('LoginID');
  console.log(userID_test);

  let dispatch = useDispatch(); */
  let userID = useSelector( (state) => {return state.userID} )
  console.log(userID);

  /* let getMPLD = async() => {
    axios.get('/api/home/detail', {params : {userID : userID} }, {withCredentials : true})
        .then((res)=> {
            let copy = [...res.data];
            console.log(copy);
            dispatch(setMPLD(copy));
        })
        .catch((error)=>{
            console.log(error.data)
            // setMpld(MPLD_data);
        })
  }; */

  useEffect( async() => {
    let getMPLD = async() => {
      axios.get('/api/home/detail', {params : {userID : userID} }, {withCredentials : true})
          .then((res)=> {
              let copy = [...res.data];
              console.log(copy);
              dispatch(setMPLD(copy));
          })
          .catch((error)=>{
              console.log(error.data)
              // setMpld(MPLD_data);
          })
    };
    console.log('MPLD 실행')
    await getMPLD();
  }, []);

  return (
    <>
      <div>
        <HeaderNav />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={hello}
            style={{
              marginBottom: "16px",
              width: "20%",
              height: "auto",
              zIndex: 2,
            }}
            // className={styles.center}
          />
        </div>
        <div>
          <LecCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
