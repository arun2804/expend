import React from 'react'
import Arun from './Img/arun.jpeg'

export default function About() {
  return (
    <div>
      <>
  <div className="container">
    <br />
    <hr />
    <h3>
      <b>About Us</b>
    </h3>
    <table>
      <tbody>
        <tr>
          <td>
            <h6>
              The project at hand is a comprehensive online ticket booking
              application that aiMr to provide users with a seamless and
              efficient way of booking their travel tickets through a
              distributed client-server computing technology. This platform is
              designed to offer three different types of ticket booking
              services, including bus, train, and flight bookings. <br />
              <br />
              To access the platform, users are required to register or sign up,
              after which they can easily access and use the ticket booking
              services provided. The platform is mobilefriendly, and users can
              easily access their travel tickets on their respective phones.{" "}
              <br />
              <br />
              Our project title is Expense Management System in which Bea stands for bringer of
              happiness or blessed we have named it this because travelling is
              always a fun activity so it’s kind of termed as “my bringer of
              joy”. <br />
              <br />
              One of the unique features of this platform is the inclusion of an
              A.I. system that suggests nearby popular places to users, based on
              their destination. This feature is designed to provide users with
              a more fulfilling travel experience and enables them to explore
              their travel destinations more effectively. When booking a bus
              ticket, users can choose their preferred bus and seats based on
              their preferences. The platform provides detailed information
              about the available buses, including their seating capacity,
              departure and arrival times, and route maps. This information is
              obtained through the use of APIs that fetch the relevant data
              about the buses. <br />
              <br />
              For flight bookings, the platform allows users to input their
              source and destination locations, after which it shows them the
              availability of flights based on their choices. The users can then
              proceed to book their preferred seats on the flight of their
              choice. This is also achieved by utilizing APIs to fetch the data
              about the flights. <br />
              <br />
              Similarly, users can book train tickets on their preferred trains
              using the platform. The platform provides users with information
              about the available trains, including their departure and arrival
              times, seating capacity, and route maps. The use of APIs enables
              the platform to fetch and display the relevant train data to
              users. <br />
              <br />
              To store user data, the platform utilizes MongoDB, a widely used
              NoSQL database. The frontend of the platform is developed using
              React JS, which is known for its high performance and flexibility.
              Payment acceptance is strictly in online mode, and the platform
              utilizes Tailwind to provide users with a seamless payment
              experience. <br />
              <br />
              In summary, the online ticket booking application developed by
              Expense Management System offers users a comprehensive and efficient way of booking
              their travel tickets. The platform is built using cutting-edge
              technologies, including MongoDB and React JS, which ensures that
              users enjoy a seamless and hassle-free experience.
            </h6>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="container">
    <br />
    <hr />
    <h3>
      <b>Team Member of Expense Management System</b>
    </h3>
    <h6>
      The members comprising our project team have been outstanding in terMr of
      their honesty, intelligence, and unwavering work ethic. Their exceptional
      level of dedication and professionalism has been consistently displayed
      throughout the duration of our project, and we cannot help but express our
      immense gratitude to our esteemed group leader,{" "}
      <b> Mr. Arun Pratap Singh. </b>
      <br />
      <br />
      <b> Mr. Arun Pratap Singh </b>contributions to our project have been invaluable,
      and her guidance and direction have played a pivotal role in the success
      of our team. Her exceptional leadership skills have kept us well-organized
      and motivated, and we are truly fortunate to have such a talented and
      experienced leader at the helm. <br />
      <br />
      We take immense pride in being part of this exceptional team, and we are
      excited about the prospect of future successes under{" "}
      <b> Mr. Arun Pratap Singh </b>guidance. We cannot thank her enough for her
      unwavering support and leadership, and we look forward to the continued
      growth and development of our team under her tutelage.
    </h6>
    <br />
    <div className="row my-2">
      <div className="col-12 col-md-6 col-xl-6 my-2">
        <div className="card" style={{ width: "100%", padding: 10 }}>
          <table>
            <tbody>
              <tr>
                <td style={{ width: "40%" }}>
                  <img
                    src={Arun}
                    style={{ borderRadius: "50%" }}
                    className="card-img-top"
                    alt="..."
                  />
                </td>
                <td>
                  <h6>
                    <b>
                      <i className="bi bi-person-fill" /> Arun Pratap Singh
                    </b>
                  </h6>
                  <h6>
                    <i className="bi bi-envelope-at-fill" />{" "}
                    arunprataps117@gmail.com
                  </h6>
                  <h6>
                    <i className="bi bi-telephone-fill" /> +91 91706 50046{" "}
                  </h6>
                  <h6>
                    <i className="bi bi-geo-alt-fill" /> Medical Collage Banda,
                    Uttar Pradesh, 210001
                  </h6>
                  <h6>
                    <i className="bi bi-award-fill" /> Team Leader{" "}
                  </h6>
                  <h6>
                    <i className="bi bi-facebook" />{" "}
                    <i className="bi bi-instagram" />
                    <i className="bi bi-whatsapp" />{" "}
                    <i className="bi bi-linkedin" />{" "}
                    <i className="bi bi-google" />{" "}
                    <i className="bi bi-twitter" />{" "}
                    <i className="bi bi-pinterest" />{" "}
                    <i className="bi bi-git" />{" "}
                    <i className="bi bi-info-square-fill" />
                  </h6>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       
       
    </div>
  </div>
</>
    </div>
  )
}
