import { Avatar } from "./components";
import AvatarGroup from "./components/AvatarGroup";
import { imageUrl } from "./util/imageUrl";

function App() {
  return (
    <div>
      <AvatarGroup max={3}>
        {imageUrl.map((url, index) => {
          return (
            <Avatar
              arial-label="meow"
              key={index}
              src={url}
              size="sm"
              style={{
                border: "1.5px solid gray",
                backgroundColor: "white",
              }}
            />
          );
        })}
      </AvatarGroup>
    </div>
  );
}

export default App;
