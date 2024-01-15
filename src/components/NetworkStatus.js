import myImage from "/src/assets/Images/networkerrorimage.png";

const NetworkStatus = () => {
  return (
    <div className="nDVxx">
      <div className="_3vspF">
        <div className="hFjjz">
          <img src={myImage} alt="Network Error" />
          <div className="_3Ognu">Connection Error</div>
          <div className="_1CN4Y">Please check your internet connection and try again.</div>
        </div>
      </div>
    </div>
  );
};

export default NetworkStatus;
