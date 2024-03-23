const containerStyles = {
  visibility: "hidden",
  maxWidth: "300px",
  position: "absolute",
  top: "40px",
  right: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  padding: "15px",
  color: "#fdfdfd",
  backgroundColor: "#ac485a",
  fontSize: "medium",
  gap: "5px",
  textAlign: "center",
  fontFamily: "Rubik, sans-serif",
};

const headerStyles = {
  margin: "5px",
  fontWeight: "normal",
  fontSize: "20px",
};

const messageStyles = {
  margin: "5px",
  padding: "5px",
};

export function displayNotification(header, message) {
  const notificationContainer = document.getElementById(
    "notification-container"
  );
  const notificationHeader = document.getElementById("notification-header");
  const notificationMessage = document.getElementById("notification-message");

  Object.assign(notificationContainer.style, containerStyles);
  Object.assign(notificationHeader.style, headerStyles);
  Object.assign(notificationMessage.style, messageStyles);

  notificationHeader.textContent = header;
  notificationMessage.textContent = message;

  notificationContainer.style.visibility = "visible";
  setTimeout(() => {
    notificationContainer.style.visibility = "hidden";
  }, 6000);
}
