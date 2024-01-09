import { PostPreview } from "../Post/PostPreview/PostPreview";
import { Link } from "react-router-dom";
import { Button } from "../Shared_button/Button";
import { ProfileUser } from "../ProfileUser/ProfileUser";
import "../Shared_button/button.css";
import "./home.css";
import icons from './dynamic-icons.jsx'
import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const linkButton = [];
  const [data, setData] = useState()


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/posts')
      setData(
        response.data
      )
    }
    fetchData()
  }, [])


  return (
    <div>
      <div className="info-user-container">
        {" "}
        <ProfileUser
          nome="Bjorn"
          professione="Full-stack Web Developer"
          avatarLink="https://avatars.githubusercontent.com/u/117609164?v=4"
        />
        <div className="buttons-container">
          {" "}

          {icons.map((icon, index) => (
            <Button key={index} icons={icon} />
          ))}

         {/*  {linkButton.map((el, index) => ( */}
{/*             <Button name={el} icons={icons} />
 */}         {/*  ))} */}
        </div>
      </div>

      {data && data.map(el => <PostPreview data={el}/>)}
      <Link to="/post"> continue reading</Link>
    </div>
  );
};
