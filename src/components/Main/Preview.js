import Card from "./Card";
import Profile from "./Profile";
import '../../styles/layout/Preview.scss'

function Preview({
  data,
  project,
  avatar,
  className,
  imageProfile,
  imageProject,
}) {
  return (
    <section className="preview">
      <Profile
        imageProfile={imageProject}
        avatar={project}
        className={"preview__image"}
      />
      <Card imageProfile={imageProfile} data={data} avatar={avatar}></Card>
    </section>
  );
}
export default Preview;
