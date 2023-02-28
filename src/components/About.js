import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <h1>The Team</h1>
        <section id="about-profile-container">
          <section class="profile-section">
            <img class="profile-img" src="/" alt="" />
            <h3 class="profile-name">James Ian Solima</h3>
            <p class="profile-text">Originally from Hawaii. And ex-service member, James has always had a fascination
              with coding and video games. So he decided to pursue his interests and turn it into a career.
            </p>
          </section>
          <section class="profile-section">
            <img class="profile-img" src="./assets/shorthairprofile.png" alt="" />
            <h3 class="profile-name">Ethan Albers</h3>
            <p class="profile-text">25 years old and just got out of the military in November 2022. Enjoys the outdoors and a good podcast or audiobook.
            </p>
          </section>
        </section>
      </>
    )
  }
};

export default Profile;
