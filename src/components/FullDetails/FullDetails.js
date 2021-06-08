import React, { useEffect, useState } from "react";
import * as classes from "./FullDetails.module.scss";
import { connect } from "react-redux";

const FullDetails = (props) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  useEffect(() => {
    setSelectedUserId(props.match.params.id);
    // Find the clicked user
    setSelectedUserDetails(
      props.usersData.find((user) => user.id === Number(selectedUserId))
    );
  }, [props.usersData, props.match.params.id, selectedUserId]);

  const closeDetailsHandler = () => {
    props.history.push("/");
  };

  return (
    <div className={classes.FullDetails}>
      <div className={classes.FullDetails__close}>
        <p onClick={closeDetailsHandler}>&#10006;</p>
      </div>
      {selectedUserDetails ? (
        <div className={classes.FullDetails__container}>
          <div className={classes.FullDetails__section}>
            <h2 className={classes.FullDetails__section__title}>Address</h2>
            <h4 className={classes.FullDetails__section__detail}>
              City:&nbsp;{selectedUserDetails.address.city}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Geo:&nbsp;
              <span>Lat:&nbsp;{selectedUserDetails.address.geo.lat}</span>
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Geo:&nbsp;
              <span>Lng:&nbsp;{selectedUserDetails.address.geo.lng}</span>
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Street:&nbsp;{selectedUserDetails.address.street}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Suite:&nbsp;{selectedUserDetails.address.suite}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Zip Code:&nbsp;{selectedUserDetails.address.zipcode}
            </h4>
          </div>
          <div className={classes.FullDetails__section}>
            <h2 className={classes.FullDetails__section__title}>Company</h2>
            <h4 className={classes.FullDetails__section__detail}>
              BS:&nbsp;{selectedUserDetails.company.bs}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Catch Phrase:&nbsp;{selectedUserDetails.company.catchPhrase}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Name:&nbsp;{selectedUserDetails.company.name}
            </h4>
          </div>
          <div className={classes.FullDetails__section}>
            <h2 className={classes.FullDetails__section__title}>Other</h2>
            <h4 className={classes.FullDetails__section__detail}>
              ID:&nbsp;{selectedUserDetails.id}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Email:&nbsp;
              <a href={`mailto:${selectedUserDetails.email}`}>
                {selectedUserDetails.email}
              </a>
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Name:&nbsp;{selectedUserDetails.name}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Phone:&nbsp;
              <a href={`tel:${selectedUserDetails.phone}`}>
                {selectedUserDetails.phone}
              </a>
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              UserName:&nbsp;{selectedUserDetails.username}
            </h4>
            <h4 className={classes.FullDetails__section__detail}>
              Website:&nbsp;
              <a
                href={`//${selectedUserDetails.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {selectedUserDetails.website}
              </a>
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  const usersData = state;
  return usersData;
};

export default connect(mapStateToProps)(FullDetails);
