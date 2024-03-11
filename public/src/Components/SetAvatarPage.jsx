import "../public/SetAvatar.css";
import loader from "../assets/loader.gif";

export default function SetAvatarPage({
  avatars,
  selectedAvatar,
  setSelectedAvatar,
  setProfilePicture,
  isLoading,
}) {
  return (
    <>
      <div className="SetAvatar">
        {isLoading ? (
          <img src={loader} alt="" />
        ) : (
          <div className="Container">
            <div className="title-container">
              <h1>Pick an avatar as your profile picture</h1>
            </div>
            <div className="avatars">
              {avatars.map((avatar, index) => {
                return (
                  <div
                    key={index}
                    className={`avatar ${
                      selectedAvatar === index ? "selected" : ""
                    }`}
                  >
                    <img
                      src={`data:image/svg+xml;base64, ${avatar}`}
                      alt="avatar"
                      onClick={() => setSelectedAvatar(index)}
                    />
                  </div>
                );
              })}
            </div>
            <button className="submit-btn" onClick={setProfilePicture}>
              Set as Profile Picture
            </button>
          </div>
        )}
      </div>
    </>
  );
}
