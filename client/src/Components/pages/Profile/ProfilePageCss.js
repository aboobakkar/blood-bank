import styled from "styled-components";
export const ProfilePageCSS=styled.div`

  * {
    list-style: none;


  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    display: flex;
    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, .08);
    @media (max-width: 1000px) {
      width: 95%;
      top: 70%;
    }
    @media (max-width: 400px) {
      width: 95%;
      top: 90%;
    }
  }

  .wrapper .left {
    width: 35%;
    background: linear-gradient(to right, #ac0101, #df018e);
    padding: 30px 25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    text-align: center;
    color: #fff;
    @media (max-width: 500px) {
      width: 15%;
    }
  }

  .wrapper .left img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .wrapper .left h4 {
    margin-bottom: 10px;
  }

  .wrapper .left p {
    font-size: 20px;
  }

  .wrapper .right {
    width: 65%;
    background: #fff;
    padding: 30px 25px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .wrapper .right .info,
  .wrapper .right .projects {
    margin-bottom: 25px;
    font-size: 20px;
  }




  .wrapper .right .info h3,
  .wrapper .right .projects h3 {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e0e0e0;
    color: #353c4e;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .wrapper .right .info_data,
  .wrapper .right .projects_data {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .wrapper .right .info_data .data,
  .wrapper .right .projects_data .data {
    width: 45%;
  }

  .wrapper .right .info_data .data h4,
  .wrapper .right .projects_data .data h4 {
    color: #353c4e;
    margin-bottom: 5px;
  }

  .wrapper .right .info_data .data p,
  .wrapper .right .projects_data .data p {
    font-size: 20px;
    margin-bottom: 10px;
    color: #919aa3;

  }
  
  .offer-help-container{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, #01a9ac, #01dbdf);
    margin-right: 10px;
    border-radius: 5px;
    text-align: center;
    line-height: 45px;
    color: #353c4e;
    text-transform: uppercase;
    letter-spacing: 5px;
    &:hover{
      cursor:pointer ;
    }
    svg{
      //margin-left: 30%;
      color: #D40871;
    }
    
  }


`